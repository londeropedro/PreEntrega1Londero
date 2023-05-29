
const CartItem = (item) => {
    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col-md-2">{item.cantidad}</div>
                <div class="col-md-4">{item.title}</div>
                <div class="col-md-3">{item.category}</div>
                <div class="col-md-1">{item.price}</div>
                <div class="col-md-2">{item.price * item.cantidad}</div>
            </div>
        </div>
    )
}

export default CartItem