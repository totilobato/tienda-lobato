import {useState, useEffect} from "react"
import { getFirestore } from '../services/getFirebase';
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [producto, setProducto] = useState({})
    const [categorys, setCategorys] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore();
        db.collection('productos').doc('7iY0LmMIDBQEx1ql8J9x').get()
        .then(res => {
            if(res.exists){
                setProducto({id: res.id, ...res.data()})
            }
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    useEffect(()=>{
        const db = getFirestore()
        db.collection('categoryId').get()
        .then (res=>{
            if(res.size !==0){
                setCategorys (res.doc.map(cat => ({id: cat.id, ...cat.data()})))
            }
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, []);
        
return(
    <>
        {loading ? <h3>Loading...</h3> 
        :
        <div>
        <ItemDetail producto={producto} categorias={categorys}/>
        </div>
}
    </>
    )
}

export default ItemDetailContainer 