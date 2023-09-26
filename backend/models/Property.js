const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    type: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Property', propertySchema);
