import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useState} from 'react'
import { useContext } from 'react'
import { collection, Timestamp, addDoc } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig.js'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({nick, phone, email}) => {
        try{
            const objOrder = {
                buyer: {nick, phone, email},
                items: cart,
                total:total,
                date: Timestamp.fromDate(new Date())
            }

            const orderRef = collection(db, 'orders')

            addDoc(orderRef, objOrder).then(({id}) => setOrderId(id))

            clearCart()
        }
        catch (error) {
            console.log(error)
        }
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout
