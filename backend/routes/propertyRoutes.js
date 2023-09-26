const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const middleware = require('../middleware');

// Task 2.1: Fetch all available properties
router.get('/', propertyController.listProperties);

router.use(middleware.authenticate);

// Task 2.2: Add a property (Private, requires authentication)
router.post('/', propertyController.addProperty);

// Task 2.3: Update a property (Private, requires authentication)
router.put('/:id', propertyController.updateProperty);

// Task 2.4: Delete a property (Private, requires authentication)
router.delete('/:id', propertyController.deleteProperty);

// Task 2.5: List my properties (Private, requires authentication)
router.get('/my-properties', propertyController.listUserProperties);

module.exports = router;
