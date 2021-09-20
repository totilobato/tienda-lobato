import logomauro from '../assets/images/logomauro.png';
function ItemDetail (props){
    const {producto} = props

    return(
        <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.name}
                    </div>
                    <div className ="card-img-top">
                    <img src={logomauro} alt="logo"/>
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

export default ItemDetail