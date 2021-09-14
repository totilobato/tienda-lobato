import {useState, useEffect} from 'react'
import {getFetch} from '../utils/mock'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


console.log(getFetch)


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (addCount) =>{
        console.log(addCount)
    }
    
    useEffect (()=>{
        getFetch
        .then(respuesta =>{
            setProductos(respuesta)
        })
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [])


    return (
        <div>
            <p>{greeting}</p>
            {loading ? <h3>Loading...</h3> : <ItemList productos={productos}/>}
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
