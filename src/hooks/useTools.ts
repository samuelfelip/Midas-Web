import { useState, useEffect } from 'react';
import { todoApi } from '../api/todoApi';

export const useTools = () => {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTools = async () => {
        try {
            const { data } = await todoApi.get('/tools');
            setTools(data);
        } catch (error) {
            console.error('Error al cargar herramientas:', error);
        } finally {
            setLoading(false);
        }
    };

    const createTool = async (toolData) => {
        try {
            const { data } = await todoApi.post('/tools', toolData);
            setTools(prev => [...prev, data]);
            return data;
        } catch (error) {
            console.error('Error al crear herramienta:', error);
            throw error;
        }
    };

    const updateTool = async (id, toolData) => {
        try {
            const { data } = await todoApi.put(`/tools/${id}`, toolData);
            setTools(prev => prev.map(tool => 
                tool.id === id ? data : tool
            ));
            return data;
        } catch (error) {
            console.error('Error al actualizar herramienta:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchTools();
    }, []);

    return { tools, loading, createTool, updateTool };
}; 