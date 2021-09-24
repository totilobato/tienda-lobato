import {useState, useEffect} from 'react'
import {getFetch} from '../utils/mock'
import {useParams} from 'react-router';
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();
 
    useEffect (()=>{
        getFetch
        .then(respuesta => {
            if (categoryId) {
                const catFiltrada = respuesta.filter((productos) => productos.categoryId === categoryId)
                setProductos(catFiltrada)
                console.log(catFiltrada)
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
        </div>
    )
}

export default ItemListContainer
