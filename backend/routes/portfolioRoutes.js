const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getMine,
  getPublic,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/portfolioController');

const router = express.Router();

router.get('/public', getPublic);
router.get('/mine', protect, getMine);
router.post('/', protect, createProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
