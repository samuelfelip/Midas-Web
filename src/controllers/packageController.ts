import { Request, Response } from 'express';
import { prisma } from '../database';

export const packageController = {
    getPackages: async (req: Request, res: Response) => {
        try {
            const packages = await prisma.package.findMany({
                where: { isActive: true },
                include: { courses: true }
            });
            res.json(packages);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener paquetes' });
        }
    },

    createPackage: async (req: Request, res: Response) => {
        try {
            const { name, description, price, courseIds } = req.body;
            const newPackage = await prisma.package.create({
                data: {
                    name,
                    description,
                    price,
                    courses: {
                        connect: courseIds.map((id: string) => ({ id }))
                    }
                },
                include: { courses: true }
            });
            res.json(newPackage);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear paquete' });
        }
    }
}; 