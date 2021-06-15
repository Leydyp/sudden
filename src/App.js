import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./style.css";
import ItemDetail from "./components/ItemDetail";
import Products from "./components/ItemDetailContainer.js";
import { Link, Route, Switch } from "react-router-dom";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Home from "./Home";
import Carrito from "./Carrito.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
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
        <Carrito/>
      </Switch>
    </div>
  );
}

export default App;
