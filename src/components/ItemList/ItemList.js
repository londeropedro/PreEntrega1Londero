import './ItemList.css'
import { NavLink } from 'react-router-dom';


const ItemList = ({productos}) => {
    return(
        <div className='cards'>
            {productos?.map(producto => {
                return(
                    <div className='card' key={producto.id}>
                        <img className='card__img' src={producto.image} alt='Detalles'></img> <br />
                        {producto.title} <br />
                        <NavLink to={"/Item/" + producto.id}>ver detalle</NavLink>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ItemList