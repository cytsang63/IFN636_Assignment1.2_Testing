
const express = require('express');
const { registerUser, loginUser, updateUserProfile, getProfile, getDashboardStats } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.get('/dashboard-stats', protect, getDashboardStats);
router.put('/profile', protect, updateUserProfile);

module.exports = router;
