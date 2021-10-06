import { useCartContext } from "../context/CartContext";
import CartList from './CartList'

const Cart = () => {
    const {cart} = useCartContext();
    console.log(cart)
    return(
        <div>
            <CartList/>
        </div>
)
}

export default Cart