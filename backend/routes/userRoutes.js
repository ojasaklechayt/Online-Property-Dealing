const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Task 2.6: Signup endpoint
router.post('/signup', userController.signup);

// Task 2.7: Login endpoint
router.post('/login', userController.login);

module.exports = router;
