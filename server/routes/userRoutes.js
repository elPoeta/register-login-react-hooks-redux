import express from 'express';
import { userRegister, userLogin, userProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/auth/register', userRegister);
router.post('/auth/login', userLogin);
router.get('/profile', protect, userProfile);
export default router;