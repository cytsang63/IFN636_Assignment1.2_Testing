const jwt = require('jsonwebtoken');
const PortfolioProject = require('../models/PortfolioProject');

const parseTags = (tags) => {
  if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean);
  if (typeof tags === 'string') return tags.split(',').map((t) => t.trim()).filter(Boolean);
  return [];
};

const getMine = async (req, res) => {
  try {
    const projects = await PortfolioProject.find({ user: req.user._id }).sort({ updatedAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublic = async (req, res) => {
  try {
    let excludeUserId = null;
    const authHeader = req.headers.authorization || '';
    if (authHeader.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        excludeUserId = decoded.id;
      } catch (e) {
        // Ignore invalid token for public feed.
      }
    }

    const query = excludeUserId ? { user: { $ne: excludeUserId } } : {};
    const projects = await PortfolioProject.find(query)
      .sort({ updatedAt: -1 })
      .populate('user', 'name email');

    const normalized = projects.map((p) => ({
      _id: p._id,
      title: p.title,
      topic: p.topic,
      summary: p.summary,
      tags: p.tags || [],
      imageUrl: p.imageUrl || '',
      userName: p.user?.name || p.user?.email?.split('@')[0] || 'Unknown user',
      userId: p.user?._id || null,
    }));

    res.json(normalized);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, topic, summary, tags, imageUrl } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required' });

    const project = await PortfolioProject.create({
      user: req.user._id,
      title,
      topic: topic || '',
      summary: summary || '',
      tags: parseTags(tags),
      imageUrl: imageUrl || '',
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await PortfolioProject.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed to update this project' });
    }

    const { title, topic, summary, tags, imageUrl } = req.body;
    if (title !== undefined) project.title = title;
    if (topic !== undefined) project.topic = topic;
    if (summary !== undefined) project.summary = summary;
    if (tags !== undefined) project.tags = parseTags(tags);
    if (imageUrl !== undefined) project.imageUrl = imageUrl;

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await PortfolioProject.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    if (project.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not allowed to delete this project' });
    }
    await project.deleteOne();
    res.json({ message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMine,
  getPublic,
  createProject,
  updateProject,
  deleteProject,
};
