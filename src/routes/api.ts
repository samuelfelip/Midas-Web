import { Router } from 'express';
import { toolController } from '../controllers/toolController';
import { isAdmin } from '../middleware/adminAuth';

const router = Router();

router.get('/tools', toolController.getTools);
router.post('/tools', isAdmin, toolController.createTool);
router.put('/tools/:id', isAdmin, toolController.updateTool);

export default router; 