const Property = require('../models/Property');

// Task 2.1: Fetch all available properties
const listProperties = async (req, res) => {
    try {
        // Get query parameters from the request
        const { location, price, type } = req.query;

        // Create a filter object based on user-provided criteria
        const filter = {};

        // Filter by location if provided
        if (location) {
            filter.location = location;
        }

        // Filter by price range if provided
        if (price) {
            filter.price = { $lte: price };
        }

        // Filter by property type if provided
        if (type) {
            filter.type = type;
        }

        // If no filters are provided, fetch all properties
        if (Object.keys(filter).length === 0) {
            const properties = await Property.find();
            res.json(properties);
        } else {
            // Fetch properties based on the filter criteria
            const properties = await Property.find(filter);
            res.json(properties);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Task 2.2: Add a property (Private, requires authentication)
const addProperty = async (req, res) => {
    try {
        const { name, location, type, price } = req.body;
        const newProperty = new Property({
            name,
            location,
            price,
            type,
            owner: req.user.id, // Assign the property owner based on authentication
        });
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Task 2.3: Update a property (Private, requires authentication)
const updateProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const updatedProperty = req.body;

        const existingProperty = await Property.findOne({ _id: propertyId });

        if (!existingProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }

        if (existingProperty.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You are not the owner of this property' });
        }

        existingProperty.name = updatedProperty.name || existingProperty.name;
        existingProperty.location = updatedProperty.location || existingProperty.location;
        existingProperty.price = updatedProperty.price || existingProperty.price;
        existingProperty.type = updateProperty.type || existingProperty.type;

        const savedProperty = await existingProperty.save();
        res.json(savedProperty);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Task 2.4: Delete a property (Private, requires authentication)
const deleteProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;

        const existingProperty = await Property.findOne({ _id: propertyId });

        if (!existingProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }

        if (existingProperty.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You are not the owner of this property' });
        }

        await Property.deleteOne({ _id: propertyId });
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Task 2.5: List my properties (Private, requires authentication)
const listUserProperties = async (req, res) => {
    try {
        const userProperties = await Property.find({ owner: req.user.id });
        res.json(userProperties);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    listProperties,
    addProperty,
    updateProperty,
    deleteProperty,
    listUserProperties,
};
