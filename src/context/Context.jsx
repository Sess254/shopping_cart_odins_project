import { useCallback, useContext, createContext, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


    const addToCart = useCallback((item) => {
        setCart((prev) => {
            const inCart = prev.find((p) => p.id === item.id);
            if (inCart) {
                return prev.map((p) => p.id === item.id ? {...p, qty: p.qty + 1} : p);
            }
            return [...prev, {...item, qty: 1}];
        });
    }, []);


    const removeFromCart = useCallback((id) => {
        setCart((prev) => 
            prev.reduce((acc, item) => {
                if(item.id !== id) return [...acc, item];
                if(item.qty > 1) return [...acc, {...item, qty: item.qty - 1}];
                return acc;
            }, [])
        );
    }, []);

    const clearCart = useCallback(() => setCart([]), []);

    const totalPrice = useMemo(
        () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
        [cart]
    );

    const totalItems = useMemo(
        () => cart.reduce((acc, item) => acc + item.qty, 0),
        [cart]
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
        return useContext(CartContext);
    }