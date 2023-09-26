const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRETKEY;

// Task 2.6: Signup endpoint
const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            email,
            password,
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Task 2.7: Login endpoint
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const token = jwt.sign({ user: { id: user.id, email: user.email } }, secretKey);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    signup,
    login,
};
