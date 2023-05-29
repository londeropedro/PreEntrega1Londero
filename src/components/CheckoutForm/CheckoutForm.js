import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [nick, setNick] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            nick, phone,email
        }
    
        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input
                        className="form-control"
                        value={nick}
                        onChange={({target}) => setNick(target.value)}
                    />
                </label>
                <br />
                <label className="Label">
                    Teléfono
                    <input
                        className="form-control"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <br />
                <label className="Label">
                    email
                    <input
                        className="form-control"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" className="Button">Crear Orden</button> 
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm