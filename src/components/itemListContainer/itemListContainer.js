import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'
import products from "../../products.json"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [estado, setEstado] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
      const pedido = new Promise((res, rej) => {
        setTimeout(() => {
          if(categoryId != null){
            const respuesta = products.filter(prod => prod.category === categoryId)
            res(respuesta)
          }
          else
            res(products)
          
        },2000)
      })
      
      pedido
        .then((resultado) => {
            setEstado(resultado)
        })
        .catch((error) => {
          console.log(error)
        })
  
    }, [categoryId])

    return (
      <ItemList productos={estado}/>
    )
}

export default ItemListContainer