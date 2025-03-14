import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database';

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id; // Asumiendo que tienes el usuario en req después de la autenticación
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (user?.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Acceso denegado' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: 'Error en verificación de admin' });
    }
}; 