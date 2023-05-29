import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.js'

const ItemListContainer = () => {
    const [estado, setEstado] = useState([])
    
    const { categoryId } = useParams()

    useEffect(() => {
     

      const collectionRef = categoryId
        ? query(collection(db, '1'), where('category', '==', categoryId))
        : collection(db, '1')

      getDocs(collectionRef)
        .then(response => {
          const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setEstado(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
    }, [categoryId])

    return (
      <ItemList productos={estado}/>
    )
}

export default ItemListContainer