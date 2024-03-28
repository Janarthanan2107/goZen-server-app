import express from 'express';
import {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);

// Route to create a new user
router.post('/', createUser);

// Route to get a single user by ID
router.get('/:id', getUserById);

// Route to update a user
router.put('/:id', updateUser);

// Route to delete a user
router.delete('/:id', deleteUser);

export default router;
