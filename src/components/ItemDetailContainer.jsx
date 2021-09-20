import {useState, useEffect} from "react"
import {getFetch} from '../utils/mock';
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [item, setItem] = useState({})

    const {id} = useParams();
    useEffect(()=>{

        getFetch
        .then(resp => {
            if (id) {
                const itemFiltrado = resp.filter((item) => item.id === id)
                setItem(itemFiltrado)
            }else {
                setItem(resp)
            }
        })
        .catch((err)=> console.log(err))
    }, [id])
return(
    <>
        <ItemDetail key={item} item={item}/>
    </>
)}

export default ItemDetailContainer 