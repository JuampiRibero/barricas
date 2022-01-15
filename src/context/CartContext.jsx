import { createContext, useContext, useState} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityInCart, setQuantityInCart] = useState(0);

    const addItem = (item, quantity) => {
        const index = isInCart(item.id);

        if(index === -1) {
            cart.push({ item: item, quantity: quantity });
            setQuantityInCart(quantityInCart + quantity);
        } else {
            const currentQuantity = cart[index].quantity;
            if(currentQuantity + quantity <= item.stock) {
                cart[index] = { item: item, quantity: currentQuantity + quantity };
                setQuantityInCart(quantityInCart + quantity);
            };
        };
    };

    const removeItem = (itemId) => {
        const index = isInCart(itemId);
    
        if(index > -1) {
            const quantity = cart[index].quantity;
            setQuantityInCart(quantityInCart - quantity);
            cart.splice(index, 1);
        };
    };

    const clearCart = () => {
        setCart([]);
        setQuantityInCart(0);
    };

    const isInCart = (itemId) => {
        let i = 0;
        const length = cart.length;
        let index = -1;
        while (i < length && index === -1) {
            if(cart[i].item.id === itemId) {
                index = i;
            } else {
                i++;
            }
        };
        return index;
    };

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, setCart, quantityInCart, setQuantityInCart, addItem, removeItem, clearCart, isInCart }}>
            { children }
        </CartContext.Provider>
    );
};