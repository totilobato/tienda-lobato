import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const {cartList, deleteFromCart, addToCart, totalPrice, clearList} = useCartContext();
    console.log(cartList)
    return(
        <>
            <center>
                {cartList.map (item =><div key={item.id}>
                    <h2>{item.item.title}</h2>
                    <button onClick={()=>addToCart(item)}>Agregar al Carrito</button>
                    <button onClick={()=>clearList(item)}>Limpiar Lista</button>
                    <button onClick={()=>totalPrice(item)}>Precio Total</button>
                    <button onClick={()=>deleteFromCart(item)}>Eliminar del Carrito</button>
                </div>)}
            </center>
        </>
    )
}

export default Cart