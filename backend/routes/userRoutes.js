const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middleware = require('../middleware');

// Task 2.6: Signup endpoint
router.post('/signup', userController.signup);

// Task 2.7: Login endpoint
router.post('/login', userController.login);

router.post('/verify-token', middleware.authenticate);

module.exports = router;
