import {useState, useEffect} from "react"
import {getFetch} from '../utils/mock';
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {category} = useParams();

    useEffect(()=>{

        getFetch
        .then(resp => {
            if (category) {
                const itemFiltrado = resp.filter((item) => item.category === category)
                setItem(itemFiltrado)
            }else {
                setItem(resp)
            }
        })
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    }, [category])
return(
    <>
        {loading ? <h3>Loading...</h3> : <ItemDetail key={item} item={item}/>}
    </>
    )
}

export default ItemDetailContainer 