import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UnderConstructionContainer from "./container/UnderConstruction";
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <UnderConstructionContainer />
        </Route>
        <Route path='/nosotros'>
          <UnderConstructionContainer />
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
          <UnderConstructionContainer />
        </Route>
        <Route path='/carrito' component={Cart}>
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;