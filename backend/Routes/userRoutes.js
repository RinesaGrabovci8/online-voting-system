// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/userController');
const authorize = require('../middlewares/authMiddleware'); // Assuming you have an authorization middleware
const router = express.Router();

router.get('/admin', authorize('admin'), userController.adminRoute);
router.get('/profile', authorize('user'), userController.userProfile);

module.exports = router;
