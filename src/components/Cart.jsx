import {useState} from 'react';
import { useCartContext } from "../context/CartContext";
import {getFirestore} from '../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore'

const Cart = () => {
    const [formData, setFormData] = useState(initialState)
    const { product, totalPrice, clearList } = useCartContext()

function handleChange(e) {
    setFormData (
        {
        ...formData,
        [e.target.name] : e.target.value
    }
    )
}

function handleSubmit (e){
        e.preventDefault()
        const newOrder = {
            buyer: formData,
            items: product,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        const db = getFirestore()
        const orders = db.collection('orders')
        orders.add(newOrder)
        .then (res => alert (`Su orden de compra es : ${res.id}`))
        .catch (err => console.log(err))
        .finally (()=>{
            setFormData(initialState)
            clearList()
        })
}

return (
    <div>
            {product.map(pro =>  <div> 
                                <p>{ pro.item.title}</p>
                                <p>{ pro.quantity}</p>
                            </div>
            )}
            {totalPrice()}
        <form
            onSubmit = {handleSubmit}
            onChange = {handleChange}>
            
            <input type="text" placeholder="Ingrese su nombre" name ="nombre" value={formData.nombre}/>
            <input type="text" placeholder="Ingrese su telefono" name ="telefono" value={formData.telefono}/>
            <input type="email" placeholder="Ingrese su email" name ="email" value={formData.email}/>
            <button className="btn btn-outline-warning btn-block">Finalizar compra</button>
        </form>
            <button className="btn btn-outline-warning btn-block">Vaciar Carrito</button>
    </div>
)
}

export default Cart

const initialState = {
    nombre: '',
    email: '',
    telefono: '',

}