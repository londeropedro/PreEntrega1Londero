
const CartItem = (item) => {
    
    return (
        <div>
            cantidad:{item.cantidad} {item.id}, {item.title}, {item.category}, {item.price}, {item.price * item.cantidad}
            
        </div>
    )
}

export default CartItem