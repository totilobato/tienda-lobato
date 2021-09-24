import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
function App() {
  return (
<BrowserRouter>
  <>
    <NavBar/>
    <Switch>
      <Route exact path='/'>
        <ItemListContainer greeting='Bienvenidos a Bora Bora GrowShop!'/>
      </Route>
      <Route exact path='/category/:categoryId'>
        <ItemListContainer greeting='Bienvenidos a Bora Bora GrowShop!'/>
      </Route>
      <Route exact path='/item/:categoryId'>
        <ItemDetailContainer/>
      </Route>
    <Route exact path='/Cart'>
      <Cart/>
    </Route>
    </Switch>
  </>
</BrowserRouter>
  );
}

export default App;
