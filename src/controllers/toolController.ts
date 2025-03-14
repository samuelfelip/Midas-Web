import { Request, Response } from 'express';
import { prisma } from '../database';

export const toolController = {
    // Obtener todas las herramientas
    getTools: async (req: Request, res: Response) => {
        try {
            const tools = await prisma.tool.findMany({
                where: { isActive: true }
            });
            res.json(tools);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener herramientas' });
        }
    },

    // Crear nueva herramienta (solo admin)
    createTool: async (req: Request, res: Response) => {
        try {
            const { name, description, type, config } = req.body;
            const tool = await prisma.tool.create({
                data: {
                    name,
                    description,
                    type,
                    config
                }
            });
            res.json(tool);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear herramienta' });
        }
    },

    // Actualizar herramienta
    updateTool: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, description, type, config, isActive } = req.body;
            const tool = await prisma.tool.update({
                where: { id },
                data: {
                    name,
                    description,
                    type,
                    config,
                    isActive
                }
            });
            res.json(tool);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar herramienta' });
        }
    }
}; 