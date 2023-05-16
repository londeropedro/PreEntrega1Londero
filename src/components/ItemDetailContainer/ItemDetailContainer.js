import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import products from "../../products.json"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {Id} = useParams()

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                const respuesta = products.find(prod => prod.id === Id)
                res(respuesta)
            },2000)
          })
          
          pedido
            .then((resultado) => {
                setProduct(resultado)
            })
            .catch((error) => {
              console.log(error)
            })
      
        }, [Id])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer