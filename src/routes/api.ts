import { Router } from 'express';
import { toolController } from '../controllers/toolController';
import { isAdmin } from '../middleware/adminAuth';
import { cartController } from '../controllers/cartController';
import { packageController } from '../controllers/packageController';

const router = Router();

router.get('/tools', toolController.getTools);
router.post('/tools', isAdmin, toolController.createTool);
router.put('/tools/:id', isAdmin, toolController.updateTool);

router.get('/cart', cartController.getCart);
router.post('/cart/items', cartController.addToCart);
router.delete('/cart/items/:itemId', cartController.removeFromCart);

router.get('/packages', packageController.getPackages);
router.post('/packages', isAdmin, packageController.createPackage);

export default router; 