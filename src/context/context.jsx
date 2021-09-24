import {useState, createContext, useContext} from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({children}) {
    const [product, setProducts] = useState([]);
    const addProduct = (item, quantity) => {
        const index = product.findIndex(i => i.item.id === item.id)
        if (index > -1) {
            const oldQunatity = product[index].quantity
            product.splice(index, 1)
        setProducts([...product, { item, quantity: quantity + oldQunatity}])
        }
        else {
            setProducts([...product, {item, quantity}])
        }
    }

    const deleteFromCart = (item) => {
        const deleteProduct = product.filter((prod) => prod.item.id !== item.item.id);
        setProducts([...deleteProduct]);
        console.log(deleteFromCart);
    };

    const iconCart = () => {
        return product.reduce( (acum, valor)=> acum + valor.quantity, 0) 
    }

    const clearList =()=>{
        setProducts([])
    }       

    const totalPrice =()=>{
        return product.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }

    return (
        <AppContext.Provider value={{
            product,
            addProduct,
            iconCart,
            deleteFromCart,
            clearList,
            totalPrice
        }}>
            {children}
        </AppContext.Provider>
    )

    }

    export default AppContextProvider
