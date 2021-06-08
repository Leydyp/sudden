import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./style.css";
import Contenedor from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import Products from "./components/ItemDetailContainer.js";
import { Link, Route, Switch } from "react-router-dom";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Contenedor />
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/products/:productId">
          <ItemDetail />
        </Route>
        <Route exact path="/nosotros">
          <Nosotros/>
        </Route>
        <Route exact path="/contacto">
        <Contacto/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
