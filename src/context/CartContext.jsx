import {useState, createContext, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        const index = cart.findIndex (i => i.item.id === item.id)
            if (index > -1) {
                const oldQuantity = cart[index].quantity

                cart.splice(index, 1)
                setCart ([...cart, { item, quantity: quantity + oldQuantity}])
            }else{
                setCart ([...cart, {item, quantity}])
            }
}
    const deleteFromCart = (item) => {
        const deleteProductFromCart = cart.filter((prod)=> prod.item.id !== item.item.id);
        setCart ([...deleteProductFromCart]);
    };
    const iconCart = () => {
        return cart.reduce((acum, valor) => acum+ valor.quantity, 0)
    }
    const clearList = () => {
        setCart ([])
    }
    const totalPrice = () => {
        return cart.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0)
    }
    console.log(cart)

    return (
        <CartContext.Provider value ={{
            cart,
            addProduct,
            deleteFromCart,
            iconCart,
            clearList,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;