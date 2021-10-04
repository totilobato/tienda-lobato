import { useCartContext } from "../context/CartContext";
import CartList from './CartList'

const Cart = () => {
    const {cartList} = useCartContext();
    console.log(cartList)
    return(
        <div>
            <CartList/>
        </div>
)
}

export default Cart