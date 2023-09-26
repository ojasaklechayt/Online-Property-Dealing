const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Import cookie-parser
require('dotenv').config();
const secretKey = process.env.SECRETKEY;

function authenticate(req, res, next) {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
}

module.exports = { authenticate };
