import React, { Component } from "react";
import "./Navbar.css";
import "./Cartwidget";
import Cartwidget from "./Cartwidget";
import {NavLink }from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 ><img src='/logo.png' className="navbar-logo"alt="logo"/></h1>
        <ul className="nav-menu">
        <li><NavLink className="nav-links" to={'/'}>Inicio</NavLink></li>
        <li><NavLink className="nav-links"to={"/products"}>Productos</NavLink></li>
        <li><NavLink className="nav-links"to={"/nosotros"}>Nosotros</NavLink></li>
        <li><NavLink className="nav-links"to={"/contacto"}>Contacto</NavLink></li>
          </ul>
        <Cartwidget/>
      </nav>
      
    );

  }
}

export default Navbar;
