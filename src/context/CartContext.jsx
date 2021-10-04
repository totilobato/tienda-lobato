import {useState, createContext, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = id => cart.find(prod=>prod.id === id)
    const addToCart = product => {
        const newCart = [...cart];
        const productIsInCart = isInCart(product.id);
        console.log(productIsInCart)
        if(productIsInCart){
            newCart[newCart.findIndex(prod=>prod.id == productIsInCart.id)].quantity++;
        setCart(newCart);
        console.log(cart);
        return;
        }
        product.quantity = 1;
        setCart ([
            ...newCart,product
        ]);
        console.log(cart)    
    }
    const deleteFromCart = (product) => {
        const newCart = [...cart];
        const productIsInCart = isInCart(product.id);
        console.log(productIsInCart)
        if(!productIsInCart){
            console.log('El producto no se encuentra en el Carrito')
            return;
        }
        const deleteProduct = newCart.filtler(prod=>prod.id !== productIsInCart.id);
        setCart(deleteProduct);
        console.log(cart)
    }
    const deleteCart = () => setCart([]);
    const iconCart = () => {
        return cart.reduce( (acum, valor)=> acum + valor.quantity, 0)
    }
    const totalPrice =()=>{
        return cart.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }

    
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            iconCart,
            deleteFromCart,
            deleteCart,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;