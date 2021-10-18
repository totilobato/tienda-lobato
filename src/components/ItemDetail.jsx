import ItemCount from './ItemCount'
import { useCartContext } from "../context/CartContext";
import { Col, Row } from "react-bootstrap"

function ItemDetail ({producto}){
    
    const { addProduct } = useCartContext()
    const onAdd = (cant) =>{
        addProduct(producto, cant)
    }
    return(
        <>
            <Row>
                <Col>
                    <div className='card w-50'>
                        <div className="container">
                            <label>{producto.title}</label>
                        </div>
                    <div className ="container">
                        <img src={producto.pictureUrl} alt="logo"/>
                    </div>
                    <div className ="container">
                        <label>{producto.description}</label>
                    </div>
                    <div className="container">
                    <label>{producto.price}</label>
                    </div>
                </div>
                </Col>
                <Col>
                    <ItemCount
                        stock={producto.stock}
                        initial={1}
                        onAdd={onAdd}/>
                </Col>
            </Row>
        </>
    ); 
}

export default ItemDetail