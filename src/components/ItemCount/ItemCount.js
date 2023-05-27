import './ItemCount.css'
import '../../styles/styles.css'
import { useState } from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const sumar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div>
            <div >
                <button onClick={restar} className='Button'> - </button>
                <text className='cantidad'> {cantidad} </text>   
                <button onClick={sumar} className='Button'> + </button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )

}

export default ItemCount