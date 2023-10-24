const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a user
router.post('/user', userController.createUser);

// Retrieve a user's details
router.get('/user/:id', userController.getUser);

// Update a user's details
router.put('/user/:id', userController.updateUser);

// Delete a user
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
