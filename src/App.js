import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UnderConstruction from './components/UnderConstruction';
import NotFound from './components/NotFound';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';

const App = () => {
  return (
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
          <ItemListContainer greeting={'PRODUCTOS'}/>
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
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;