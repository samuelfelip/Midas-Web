import { Request, Response } from 'express';
import { prisma } from '../database';

export const cartController = {
    getCart: async (req: Request, res: Response) => {
        try {
            const userId = req.user?.id;
            let cart = await prisma.cart.findFirst({
                where: { userId },
                include: {
                    items: {
                        include: {
                            course: true,
                            package: true
                        }
                    }
                }
            });

            if (!cart) {
                cart = await prisma.cart.create({
                    data: { userId },
                    include: { items: true }
                });
            }

            res.json(cart);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener carrito' });
        }
    },

    addToCart: async (req: Request, res: Response) => {
        try {
            const userId = req.user?.id;
            const { courseId, packageId, quantity = 1 } = req.body;

            let cart = await prisma.cart.findFirst({ where: { userId } });
            if (!cart) {
                cart = await prisma.cart.create({ data: { userId } });
            }

            const cartItem = await prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    courseId,
                    packageId,
                    quantity
                }
            });

            res.json(cartItem);
        } catch (error) {
            res.status(500).json({ error: 'Error al añadir al carrito' });
        }
    },

    removeFromCart: async (req: Request, res: Response) => {
        try {
            const { itemId } = req.params;
            await prisma.cartItem.delete({
                where: { id: itemId }
            });
            res.json({ message: 'Item eliminado del carrito' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar del carrito' });
        }
    }
}; 