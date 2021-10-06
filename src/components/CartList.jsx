import { useCartContext } from "../context/CartContext";

const CartList = () => {
const {cart, precioTotal} = useCartContext();
    return (
        <>
            {
                cart && cart.map (prod => <div>
                    <p>{prod.producto.producto.title}</p>
                    <p>{prod.producto.producto.description}</p>
                    <p>{prod.producto.producto.pictureUrl}</p>
                    <p>{prod.producto.producto.price}</p>
                    <p>{prod.cantidad}</p>
                    </div>
                        )}
                {precioTotal}
        </>
    )    
    }

export default CartList