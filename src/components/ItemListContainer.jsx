import {useState, useEffect} from 'react'
import {getFetch} from '../utils/mock'
import {useParams} from 'react-router';
import ItemCount from './ItemCount'
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

    const onAdd = (addCount) =>{
        console.log(addCount)
    }
    
    useEffect (()=>{
        getFetch
        .then(respuesta => {
            if (categoryId) {
                const catFiltrada = respuesta.filter((item) => item.categoryId === categoryId)
                setProductos(catFiltrada)
            }else {
                setProductos(respuesta)
            }
        })
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [categoryId])


    return (
        <div>
            <p>{greeting}</p>
            {loading ? <h3>Loading...</h3> : <ItemList productos={productos}/>}
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
