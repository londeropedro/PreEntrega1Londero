import './ItemDetail.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ id, title, image, category, price}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);

    const {addItem} = useContext(CartContext)
    
    const agregarCantidad = (cantidad) => {
        setCantidadAgregada(cantidad)
    
        const item = {
            id, title, category, price, cantidad
        }
    
        addItem(item)
    }
    return(
        <article className='Tarjeta'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Precio: {price}
                </p>
            </section>
            <section>
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/cart' className='Button'>Terminar Compra</Link>
                    ) :
                    (
                        <ItemCount inicial={1} stock={10}  onAdd={agregarCantidad}/> 
                    )
                }
            </section>
        </article>
    )
}

export default ItemDetail