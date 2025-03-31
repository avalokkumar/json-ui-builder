const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

//Call mock user details API
router.get('/mockDetail', userController.getMockUserDetails);

// CRUD operations for users
// Note: These routes are already defined in userController.js
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
