const User = require('../models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
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
async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Authenticate the user (e.g., by finding the user in the database)
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Generate the JWT token
        const token = jwt.sign({ user: { id: user.id, email: user.email } }, secretKey);

        // Set the token as a cookie in the response
        res.cookie('jwt', token, {
            httpOnly: true, // This makes the cookie accessible only via HTTP (not JavaScript)
            maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (e.g., 7 days)
            secure: process.env.NODE_ENV === 'production', // Set to true in production for secure cookies (HTTPS)
            sameSite: 'none', // Set to 'none' in production for cross-origin cookies
        });

        // Respond with a success message or user data
        res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    signup,
    login,
};
