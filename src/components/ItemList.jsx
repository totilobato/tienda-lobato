import React from 'react'
import Producto from './Item'


const ItemList = ({productos}) => {
    console.log(ItemList)
    return (
        <>
            <ul>
                {productos.map(producto=> <Producto key={producto.id} producto = {producto}/>
                )}
            </ul>
        </>
    )
}

export default ItemList