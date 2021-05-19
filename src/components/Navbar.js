import React, { Component } from "react";
import { MenuItems } from "./Menu";
import "./Navbar.css";
import "./Cartwidget";
import Cartwidget from "./Cartwidget";


class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 ><img src="logo.png" className="navbar-logo"alt="logo"/></h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.titulo}
                </a>
              </li>
            );
          })}
        </ul>
        <Cartwidget/>
      </nav>
      
    );

  }
}

export default Navbar;
