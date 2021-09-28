import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
    console.log(ItemList)
    return (
        <>
            <ul>
                {productos.map(producto=> <Item key={producto.id} producto = {producto}/>
                )}
            </ul>
        </>
    )
}

export default ItemList