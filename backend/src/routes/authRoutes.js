import express from 'express';
import { register, login, editUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/users/:id', editUser);

export default router;