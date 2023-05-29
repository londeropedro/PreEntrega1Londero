import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clearCart, totalCantidad, total} = useContext(CartContext)
   
    if({totalCantidad} === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className='Option'>Productos</link>
            </div>
        )
    }

    return (
        <div>
            <h1>Listado de Productos Seleccionados</h1>
            <div class="container">
                <div class="row" style={{color:"white", backgroundColor:"blue"}}>
                    <div class="col-md-2">Cantidad</div>
                    <div class="col-md-4">Descripción</div>
                    <div class="col-md-3">Categoría</div>
                    <div class="col-md-1">Precio U.</div>
                    <div class="col-md-2">Subtotal</div>
                </div>
            </div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Button2'>Checkout</Link>
        </div>
    )
}

export default Cart

