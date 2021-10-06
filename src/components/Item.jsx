import Nav from 'react-bootstrap/Nav'

const Producto = ({producto}) => {
    return (
        <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className ="card-img-top">
                    <img src={producto.pictureUrl} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {producto.description}
                    </div>                   
                    <div className="card-footer">
                        {`precio :${producto.price}`}
                    </div>
                    <Nav.Link href={`/item/${producto.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                </div>
    )
}

export default Producto
