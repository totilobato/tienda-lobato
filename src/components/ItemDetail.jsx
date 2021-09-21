//import {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav'
import logomauro from '../assets/images/logomauro.png';
function ItemDetail (props){
    const {producto} = props

    return(
        <div>
        <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className ="card-img-top">
                    <img src={logomauro} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {producto.description}
                    </div>
                    <Nav.Link href={'/item/${ID}'}>
                    <button className="btn btn-outline-primary btn-block">Detalles</button>
                    </Nav.Link>
                    <div className="card-body">
                        {producto.price}
                    </div>
                </div>
                </div>
    )
}

export default ItemDetail