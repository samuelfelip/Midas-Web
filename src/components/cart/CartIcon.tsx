import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../hooks/useCart';

export const CartIcon = () => {
    const { cartItems } = useCart();
    
    return (
        <IconButton color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}; 