import { useState, useEffect } from 'react';
import { todoApi } from '../api/todoApi';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        try {
            const { data } = await todoApi.get('/cart');
            setCartItems(data.items);
        } catch (error) {
            console.error('Error al cargar carrito:', error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (item) => {
        try {
            const { data } = await todoApi.post('/cart/items', item);
            setCartItems(prev => [...prev, data]);
        } catch (error) {
            console.error('Error al añadir al carrito:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await todoApi.delete(`/cart/items/${itemId}`);
            setCartItems(prev => prev.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error al eliminar del carrito:', error);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = item.course?.price || item.package?.price || 0;
            return total + (price * item.quantity);
        }, 0);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return {
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        calculateTotal
    };
}; 