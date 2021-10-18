import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const { product, totalPrice } = useCartContext()

return (
    <div>
    {product.map(pro =>  <div> 
                                <p>{ pro.item.title}</p>
                                <p>{ pro.quantity}</p>
                            </div>
        )}
        {totalPrice()}
    <button >Terminar Compra</button>
    </div>
)
}

export default Cart
