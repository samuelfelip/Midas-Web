import React from 'react';
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemText, 
    Button,
    Typography 
} from '@mui/material';
import { useCart } from '../../hooks/useCart';

export const CartDrawer = ({ open, onClose }) => {
    const { cartItems, removeFromCart, calculateTotal } = useCart();

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div style={{ width: 350, padding: 16 }}>
                <Typography variant="h6">Tu Carrito</Typography>
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.course?.name || item.package?.name}
                                secondary={`$${item.course?.price || item.package?.price}`}
                            />
                            <Button onClick={() => removeFromCart(item.id)}>
                                Eliminar
                            </Button>
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6">
                    Total: ${calculateTotal()}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {/* Implementar checkout */}}
                >
                    Proceder al pago
                </Button>
            </div>
        </Drawer>
    );
}; 