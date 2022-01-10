import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UnderConstruction from './components/UnderConstruction';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <UnderConstruction />
        </Route>
        <Route path='/nosotros'>
          <UnderConstruction />
        </Route>
        <Route path='/tienda'>
          <ItemListContainer greeting={'¡Bienvenidos a la tienda de Barricas!'}/>
        </Route>
        <Route path='/bodega/:bodegaId'>
          <ItemListContainer greeting={''}/>
        </Route>
        <Route path='/detalle/:itemId'>
          <ItemDetailContainer />
        </Route>
        <Route path='/contacto'>
          <UnderConstruction />
        </Route>
        <Route path='/carrito'>
          <UnderConstruction />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;