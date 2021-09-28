import { useState } from "react";
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import { useCartContext } from "../context/CartContext";
import { Col, Row } from "react-bootstrap"
import logomauro from '../assets/images/logomauro.png';

function ItemDetail (props){
    
    const [cambiarBoton, setCambiarBoton] = useState(false)
    const producto = props
    const { addToCart } = useCartContext()
    const onAdd = (cant) =>{
        console.log(cant)
        addToCart({producto: producto, cantidad: cant})
        setCambiarBoton (true)
    }

    return(
        <>
            <Row>
                <Col>
                    <div key={producto.id} className='card w-50 container'>
                        <div className="card-header">
                            {producto.title}
                        </div>
                    <div className ="card-img-top">
                        <img src={logomauro} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {producto.description}
                    </div>
                    
                    <div className="card-body">
                        {producto.price}
                    </div>
                </div>
                </Col>
                <Col>
                {cambiarBoton ? (
            <Link to="/cart">
            <button className="btn btn-outline-warning btn-block">
                Finalizar Compra
            </button>
            </Link>
        ) : (
            <ItemCount
            stock={10}
            initial={1}
            onAdd={onAdd}
            cambiarBoton={cambiarBoton}
            />
        )}
                </Col>
            </Row>
        </>
    )
}

export default ItemDetail