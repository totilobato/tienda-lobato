import {useState, useEffect} from 'react'
import { getFirestore } from '../services/getFirebase';
import {useParams} from 'react-router';
import ItemList from './ItemList'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId = undefined} = useParams();

    useEffect (()=>{
        let db = getFirestore();
        let productsCollection = db.collection('productos')
        const dbQuery = categoryId ? productsCollection.where('categoryId', '==', categoryId) : productsCollection
        dbQuery.get().then(res => {
            if (res.size === 0){
                console.log('No Result')
            }
            setProductos(res.docs.map(producto=>({id: producto.id, ...producto.data()}) ))
        })
        .catch ((err)=>{
            console.log('Fail searching Products', err)
        }). finally(()=>{
            setLoading(false)
        })}, [categoryId])

    return (
        
        <div>
            {loading ? 
                <h3>Loading...</h3> : <ItemList productos={productos}/>
                }
        </div>
    )
}

export default ItemListContainer
