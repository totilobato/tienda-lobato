import {useState, useEffect} from "react"
import {useParams} from 'react-router'
import { getFirestore } from '../services/getFirebase';
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams ()

    useEffect(()=>{
        const db = getFirestore();
        db.collection('productos').doc(itemId).get()
        .then(res => {
                setProducto({id: res.id, ...res.data()})        
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, [itemId])
        
return(
    <>
        {loading ? <h3>Loading...</h3> 
        :
        <div>
        <ItemDetail producto={producto}/>
        </div>
}
    </>
    )
}

export default ItemDetailContainer 