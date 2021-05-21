
import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Saludo from './components/ItemListContainer';
import  './style.css';
import Card from './components/ItemCount';

export default function root() {
  return (
    <div className="root">
      <Navbar/>
      <Saludo/>
      <Card/>

    </div>
  );
}



