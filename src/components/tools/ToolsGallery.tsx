import React from 'react';
import { Grid, Card } from '@mui/material';
import { useTools } from '../../hooks/useTools';

export const ToolsGallery = () => {
    const { tools } = useTools();

    return (
        <Grid container spacing={3}>
            {tools.map(tool => (
                <Grid item xs={12} sm={6} md={4} key={tool.id}>
                    <Card>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                        <Button onClick={() => handleOpenTool(tool)}>
                            Abrir Herramienta
                        </Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}; 