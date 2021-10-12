import {useState, useEffect} from 'react'
import { getFirestore } from '../services/getFirebase';
import {useParams} from 'react-router';
import ItemList from './ItemList'


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams();

    useEffect (()=>{
        const db = getFirestore()
        const queryDB = db.collection ('productos')
        const queryCondition = categoryId ?
            queryDB.where('categoryId', '==', categoryId)
            :
            queryDB

        queryCondition.get()
        .then(data =>{
            if(data.size===0){
                console.log('empty')
            }
            setProductos (data.docs.map(prod => ({id: prod.id, ...prod.data()})))
        })
    }, [categoryId])

return (
    <div>
        <ItemList items= {productos}/>
    </div>
)
}

export default ItemListContainer
