import {useState} from 'react';
import { useCartContext } from "../context/CartContext";
import {getFirestore} from '../services/getFirebase';
import firebase from 'firebase';

const Cart = () => {
    const [formData, setFormData] = useState(initialState)

    const {cart, totalPrice, clearList} = useCartContext()

    function handleChange (e) {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit (e) {
        e.prevent.default()
        const newOrder={
            buyer: formData,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

    const db = getFirestore()
    const orders = db.collection('orders')
    orders.add(newOrder)
    .then (res => alert (`Su orden de compra es: ${res.id}`))
    .catch (err=> console.log(err))
    .finally(()=>{
        setFormData(initialState)
        clearList()
    })
}

    return(
        <div>
            {cart.map (prod => <div>
                <p>{prod.producto.title}</p>
                <p>{prod.cantidad}</p>
            </div>
            )}
            {totalPrice}
            <br/>

            <form onSubmit={handleSubmit}
            onChange={handleChange}>
                <input type="text" placeholder="Ingrese su nombre" name="nombre" value={formData.nombre}/>
                <input type="text" placeholder="Ingrese su numero de contacto" name="tel" value={formData.tel}/>
                <input type="email" placeholder="Ingrese su email" name="email" value={formData.nombre}/>
                <button>Finalizar compra</button>
            </form>
        </div>
)
}
export default Cart

const initialState = {
    nombre: '',
    tel: '',
    email: ''
}