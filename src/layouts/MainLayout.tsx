import React, { useState } from 'react';
import { CartDrawer } from '../components/cart/CartDrawer';

const [cartOpen, setCartOpen] = useState(false);

return (
    <>
        {/* ... existing layout ... */}
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
); 