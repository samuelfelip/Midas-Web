import React from 'react';
import { 
    Card, 
    CardContent, 
    Typography, 
    Button, 
    List, 
    ListItem, 
    ListItemText 
} from '@mui/material';
import { useCart } from '../../hooks/useCart';

export const PackageCard = ({ package: pkg }) => {
    const { addToCart } = useCart();

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{pkg.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {pkg.description}
                </Typography>
                <Typography variant="h6" color="primary">
                    ${pkg.price}
                </Typography>
                <Typography variant="subtitle1">
                    Cursos incluidos:
                </Typography>
                <List>
                    {pkg.courses.map(course => (
                        <ListItem key={course.id}>
                            <ListItemText primary={course.name} />
                        </ListItem>
                    ))}
                </List>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => addToCart({ packageId: pkg.id })}
                >
                    Añadir al carrito
                </Button>
            </CardContent>
        </Card>
    );
}; 