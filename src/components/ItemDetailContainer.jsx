import {useState, useEffect} from "react"
import {getProducto2} from "../utils/mock";
import ItemDetail from './ItemDetail';


function ItemDetailContainer () {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState (true)

    useEffect(()=>{
        getProducto2
        .then(resp => {
            setProducto(resp)
            setCargando(false)
        })
    }, [])
console.log(producto)

return(
    <>
        {cargando ? <h3>Cargando productos...</h3> 
        : 
        <ItemDetail producto={producto}/>
        }
    </>
)}

export default ItemDetailContainer 