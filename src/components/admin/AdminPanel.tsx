import React from 'react';
import { Tabs } from '@mui/material';

export const AdminPanel = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div className="admin-panel">
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
                <Tab label="Usuarios" />
                <Tab label="Cursos" />
                <Tab label="Herramientas" />
            </Tabs>
            
            {value === 0 && <UserManagement />}
            {value === 1 && <CourseManagement />}
            {value === 2 && <ToolManagement />}
        </div>
    );
}; 