import { useCartContext } from "../context/CartContext";

const CartList = () => {
const {product, precioTotal} = useCartContext();
    return (
        <>
            {
                product.map (prod => <div>
                                        <p>{prod.item.name}</p>
                                        <p>{prod.quantity}</p>
                                    </div>
                                )}
                {precioTotal()}
        </>
    )    
    }

export default CartList