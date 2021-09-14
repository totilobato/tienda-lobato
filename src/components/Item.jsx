import React from 'react'

const Item = ({producto}) => {
    return (
        <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className ="card-img-top">
                        {producto.pictureUrl}
                    </div>
                    <div className ="list-group-item">
                        {producto.description}
                    </div>
                    <button className="btn btn-outline-primary btn-block">Detalles</button>
                    <div className="card-body">
                        {producto.price}
                    </div>
                </div>
    )
}

export default Item
