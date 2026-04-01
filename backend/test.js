/* eslint-disable no-console */
/**
 * Manual test runner (Mocha + Chai + Sinon)
 *
 * Run:
 *   cd backend
 *   npm install
 *   npm run test:manual
 */

const Mocha = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');

const authController = require('./controllers/authController');
const portfolioController = require('./controllers/portfolioController');
const User = require('./models/User');
const PortfolioProject = require('./models/PortfolioProject');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function makeRes() {
  const res = {};
  res.statusCode = 200;
  res.body = undefined;
  res.status = sinon.stub().callsFake((code) => {
    res.statusCode = code;
    return res;
  });
  res.json = sinon.stub().callsFake((payload) => {
    res.body = payload;
    return res;
  });
  return res;
}

function makeReq({ body = {}, params = {}, user = null, headers = {} } = {}) {
  return { body, params, user, headers };
}

const mocha = new Mocha({ timeout: 10000 });
mocha.suite.emit('pre-require', global, 'nofile', mocha);

describe('Manual backend tests (chai/mocha/sinon)', () => {
  before(() => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-secret';
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('authController.registerUser', () => {
    it('returns 400 if user already exists', async () => {
      sinon.stub(User, 'findOne').resolves({ _id: 'u1' });
      const res = makeRes();
      const req = makeReq({ body: { name: 'A', email: 'a@a.com', password: 'pw' } });

      await authController.registerUser(req, res);

      expect(res.status.calledOnceWith(400)).to.equal(true);
      expect(res.body).to.deep.equal({ message: 'User already exists' });
    });

    it('creates user and returns token payload', async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves({ id: 'u2', name: 'Bob', email: 'b@b.com' });
      const res = makeRes();
      const req = makeReq({ body: { name: 'Bob', email: 'b@b.com', password: 'pw' } });

      await authController.registerUser(req, res);

      expect(res.status.calledOnceWith(201)).to.equal(true);
      expect(res.body).to.have.keys(['id', 'name', 'email', 'token']);
      expect(res.body.name).to.equal('Bob');
      expect(res.body.email).to.equal('b@b.com');
      expect(res.body.token).to.be.a('string');
    });
  });

  describe('authController.loginUser', () => {
    it('returns 401 for invalid credentials', async () => {
      sinon.stub(User, 'findOne').resolves({ password: 'hashed' });
      sinon.stub(bcrypt, 'compare').resolves(false);
      const res = makeRes();
      const req = makeReq({ body: { email: 'x@x.com', password: 'bad' } });

      await authController.loginUser(req, res);

      expect(res.status.calledOnceWith(401)).to.equal(true);
      expect(res.body).to.deep.equal({ message: 'Invalid email or password' });
    });

    it('returns user + token for valid credentials', async () => {
      sinon.stub(User, 'findOne').resolves({ id: 'u3', name: 'Jane', email: 'j@j.com', password: 'hashed' });
      sinon.stub(bcrypt, 'compare').resolves(true);
      const res = makeRes();
      const req = makeReq({ body: { email: 'j@j.com', password: 'pw' } });

      await authController.loginUser(req, res);

      expect(res.status.called).to.equal(false); // default 200
      expect(res.json.calledOnce).to.equal(true);
      expect(res.body).to.have.keys(['id', 'name', 'email', 'token']);
      expect(res.body.email).to.equal('j@j.com');
    });
  });

  describe('authController.getDashboardStats', () => {
    it('returns myProjectCount, totalProjects, totalUsers', async () => {
      sinon.stub(PortfolioProject, 'countDocuments')
        .onFirstCall()
        .resolves(2)
        .onSecondCall()
        .resolves(10);
      sinon.stub(User, 'countDocuments').resolves(5);

      const res = makeRes();
      const req = makeReq({ user: { _id: 'u1' } });

      await authController.getDashboardStats(req, res);

      expect(res.statusCode).to.equal(200);
      expect(res.body).to.deep.equal({ myProjectCount: 2, totalProjects: 10, totalUsers: 5 });
    });
  });

  describe('portfolioController.createProject', () => {
    it('returns 400 if title missing', async () => {
      const res = makeRes();
      const req = makeReq({ user: { _id: 'u1' }, body: { topic: 't' } });

      await portfolioController.createProject(req, res);

      expect(res.status.calledOnceWith(400)).to.equal(true);
      expect(res.body).to.deep.equal({ message: 'Title is required' });
    });

    it('creates project and parses tags from string', async () => {
      const createStub = sinon.stub(PortfolioProject, 'create').resolves({
        _id: 'p1',
        title: 'COVID-19',
        topic: 'Topic',
        summary: 's',
        tags: ['COVID-19', 'Python'],
        imageUrl: '',
      });

      const res = makeRes();
      const req = makeReq({
        user: { _id: 'u1' },
        body: { title: 'COVID-19', topic: 'Topic', summary: 's', tags: 'COVID-19, Python' },
      });

      await portfolioController.createProject(req, res);

      expect(createStub.calledOnce).to.equal(true);
      const payload = createStub.firstCall.args[0];
      expect(payload.user).to.equal('u1');
      expect(payload.tags).to.deep.equal(['COVID-19', 'Python']);
      expect(res.statusCode).to.equal(201);
      expect(res.body.title).to.equal('COVID-19');
    });
  });

  describe('portfolioController.updateProject', () => {
    it('returns 403 when updating a project not owned by user', async () => {
      const fakeProject = {
        user: { toString: () => 'owner' },
        save: sinon.stub().resolves(),
      };
      sinon.stub(PortfolioProject, 'findById').resolves(fakeProject);

      const res = makeRes();
      const req = makeReq({ user: { _id: 'other' }, params: { id: 'p1' }, body: { title: 'X' } });

      await portfolioController.updateProject(req, res);

      expect(res.status.calledOnceWith(403)).to.equal(true);
      expect(res.body).to.deep.equal({ message: 'Not allowed to update this project' });
    });
  });

  describe('portfolioController.deleteProject', () => {
    it('deletes owned project', async () => {
      const fakeProject = {
        user: { toString: () => 'u1' },
        deleteOne: sinon.stub().resolves(),
      };
      sinon.stub(PortfolioProject, 'findById').resolves(fakeProject);

      const res = makeRes();
      const req = makeReq({ user: { _id: 'u1' }, params: { id: 'p1' } });

      await portfolioController.deleteProject(req, res);

      expect(fakeProject.deleteOne.calledOnce).to.equal(true);
      expect(res.body).to.deep.equal({ message: 'Project removed' });
    });
  });

  describe('portfolioController.getPublic', () => {
    it('returns normalized list with userName and excludes current user when token provided', async () => {
      // Build a token for u1 to be excluded.
      const token = jwt.sign({ id: 'u1' }, process.env.JWT_SECRET, { expiresIn: '1h' });

      const populateStub = sinon.stub().resolves([
        {
          _id: 'p2',
          title: 'Australian cargo',
          topic: '',
          summary: '',
          tags: [],
          imageUrl: '',
          user: { _id: 'u2', name: 'Other User', email: 'o@o.com' },
        },
      ]);

      const findStub = sinon.stub(PortfolioProject, 'find').returns({
        sort: () => ({
          populate: populateStub,
        }),
      });

      const res = makeRes();
      const req = makeReq({ headers: { authorization: `Bearer ${token}` } });

      await portfolioController.getPublic(req, res);

      expect(findStub.calledOnce).to.equal(true);
      // Ensure exclusion query was used
      expect(findStub.firstCall.args[0]).to.deep.equal({ user: { $ne: 'u1' } });
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body[0]).to.include({ title: 'Australian cargo', userName: 'Other User' });
    });
  });
});

mocha.run((failures) => {
  if (failures) process.exitCode = 1;
});

