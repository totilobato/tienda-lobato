import {useState, createContext, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){

    const [product, setProducts] = useState([]);

    const addProduct = (item, quantity) => {
        const index = product.findIndex (i => i.item.id === item.id)
            if (index > -1) {
                const oldQuantity = product[index].quantity

                product.splice(index, 1)
                setProducts ([...product, { item, quantity: quantity + oldQuantity}])
            }else{
                setProducts ([...product, {item, quantity}])
            }
}
    const deleteFromCart = (item) => {
        const deleteProductFromCart = product.filter((prod)=> prod.item.id !== item.item.id);
        setProducts ([...deleteProductFromCart]);
    };
    const iconCart = () => {
        return product.reduce((acum, valor) => acum+ valor.quantity, 0)
    }
    const clearList = () => {
        setProducts ([])
    }
    const totalPrice = () => {
        return product.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0)
    }
    console.log(product)

    return (
        <CartContext.Provider value ={{
            product,
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