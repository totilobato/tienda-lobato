import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import {NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
function App() {
  return (
<CartContextProvider>
<BrowserRouter>
  <>
    <NavBar/>
    <Switch>
      <Route exact path='/'>
        <ItemListContainer greeting='Bienvenidos a Bora Bora GrowShop!'/>
      </Route>
      <Route exact path='/category/:categoryId' component={ItemListContainer}>
        <ItemListContainer greeting='Bienvenidos a Bora Bora GrowShop!'/>
      </Route>
      <Route exact path='/item/:categoryId' component={ItemDetailContainer}>
        <ItemDetailContainer/>
      </Route>
    <Route exact path='/Cart' component={Cart}>
      <Cart/>
    </Route>
    </Switch>
  </>
</BrowserRouter>
</CartContextProvider>
  );
}

export default App;
