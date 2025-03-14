import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog } from '@mui/material';
import { useTools } from '../../hooks/useTools';

export const ToolManagement = () => {
    const { tools, createTool, updateTool } = useTools();
    const [open, setOpen] = React.useState(false);

    const columns = [
        { field: 'name', headerName: 'Nombre', width: 200 },
        { field: 'type', headerName: 'Tipo', width: 150 },
        { field: 'isActive', headerName: 'Activo', width: 130 },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button onClick={() => handleEdit(params.row)}>Editar</Button>
                    <Button onClick={() => handleToggleActive(params.row)}>
                        {params.row.isActive ? 'Desactivar' : 'Activar'}
                    </Button>
                </>
            )
        }
    ];

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Nueva Herramienta</Button>
            <DataGrid rows={tools} columns={columns} />
            <ToolDialog open={open} onClose={() => setOpen(false)} />
        </div>
    );
}; 