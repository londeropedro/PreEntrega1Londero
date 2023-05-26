import { createContext, useState } from "react";

export const CartContext = createContext({ 
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalCantidad, setTotalCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item}])
            setTotalCantidad(totalCantidad + item.cantidad)
            setTotal(total + item.price * item.cantidad)
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotalCantidad(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

     

    return(
        <CartContext.Provider value={{ cart, totalCantidad, total, addItem, removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}