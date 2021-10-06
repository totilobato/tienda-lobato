import {useState, useEffect} from "react"
import { getFirestore } from '../services/getFirebase';
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
        let db = getFirestore();
        let productsCollection = db.collection('productos')
        const dbQuery = id ? productsCollection.where('id', '==', id) : productsCollection
        dbQuery.get().then(res => {
            if (res.size === 0){
                console.log('No Result')
            }
            setProducto(res.docs.map(producto=>({id: producto.id, ...producto.data()}) ))
        })
        .catch ((err)=>{
            console.log('Fail searching Products', err)
        }). finally(()=>{
            setLoading(false)
        })}, [id])
        
return(
    <>
        {loading ? <h3>Loading...</h3> : <ItemDetail key={producto[0].id} producto={producto[0]}/>}
    </>
    )
}

export default ItemDetailContainer 