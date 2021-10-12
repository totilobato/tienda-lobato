import ItemCount from './ItemCount'
import { useCartContext } from "../context/CartContext";
import { Col, Row } from "react-bootstrap"
import logomauro from '../assets/images/logomauro.png';

function ItemDetail ({producto, categorys}){
    console.log(categorys)
    const { addProduct } = useCartContext()
    
    const onAdd = (cant) =>{
        console.log(cant)
        addProduct(producto, cant)
    }
    return(
        <>
        {categorys.map(category => <label key={category.categoryId}> {category.title}</label>)}
            <Row>
                <Col>
                    <div className='card w-50'>
                        <div className="container">
                            <label>{producto.producto.title}</label>
                        </div>
                    <div className ="container">
                        <img src={logomauro} alt="logo"/>
                    </div>
                    <div className ="container">
                        <label>{producto.producto.description}</label>
                    </div>
                    <div className="container">
                    <label>{producto.producto.price}</label>
                    </div>
                </div>
                </Col>
                <Col>
                    <ItemCount
                        stock={10}
                        initial={1}
                        onAdd={onAdd}/>
                </Col>
            </Row>
        </>
    ); 
}

export default ItemDetail