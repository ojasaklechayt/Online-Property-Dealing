const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const middleware = require('../middleware');

// Task 2.1: Fetch all available properties
router.get('/', propertyController.listProperties);

// Task 2.2: Add a property (Private, requires authentication)
router.post('/', middleware.authenticate, propertyController.addProperty);

// Task 2.3: Update a property (Private, requires authentication)
router.put('/:id', middleware.authenticate, propertyController.updateProperty);

// Task 2.4: Delete a property (Private, requires authentication)
router.delete('/:id', middleware.authenticate, propertyController.deleteProperty);

// Task 2.5: List my properties (Private, requires authentication)
router.get('/my-properties', middleware.authenticate, propertyController.listUserProperties);

module.exports = router;
