import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./style.css";
import Contenedor from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import Products from "./components/ItemDetailContainer.js";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Contenedor />
        </Route>
        <Route exact path="/products" to="home">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ItemDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
