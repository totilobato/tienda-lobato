import {useState, createContext, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        const index = cartList.findIndex(i =>i.id === item.id)
        if(index > -1){
            const oldQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {item, quantity: quantity + oldQuantity}])
        } else {
            setCartList([...cartList, {item, quantity}])
        }
    }

    const deleteFromCart = (item) => {
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        setCartList([...deleteProduct]);
    };

    const iconCart = () => {
        return cartList.reduce((acum, valor)=> acum + valor.quantity, 0) 
    }

    const clearList =()=>{
        cartList([])
    }       

    const totalPrice =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }
    console.log(cartList)

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            iconCart,
            deleteFromCart,
            clearList,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}