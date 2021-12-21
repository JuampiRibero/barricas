import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/nosotros">

        </Route>
        <Route path="/servicios">

        </Route>
        <Route path="/tienda">
          <ItemListContainer greeting={'PRODUCTOS'}/>
        </Route>
        <Route path="/bodega/:bodegaId">
          <ItemListContainer greeting={'FILTRO'}/>
        </Route>
        <Route path="/detalle/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/contacto">

        </Route>
        <Route path="/carrito">

        </Route>
        <Route path="*">
          <h1>404 - NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;