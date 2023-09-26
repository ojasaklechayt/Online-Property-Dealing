const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

try {
    // Connect to MongoDB using the URL provided in the .env file
    mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

    // Event handlers for MongoDB connection
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
} catch (err) {
    // Handle any errors that occur during MongoDB connection
    console.error('An error occurred while connecting to MongoDB:', err);
}

const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
