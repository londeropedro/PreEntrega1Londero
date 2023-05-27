import logo from './assets/CardWidget.gif';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CardWidget = () => {
    const {totalCantidad} = useContext(CartContext)
   

    return(

        <Link to='/cart' className='CartWidget'>
            <img src={logo} alt='cart-widget'></img>
            {totalCantidad}
        </Link>
    )
}

export default CardWidget