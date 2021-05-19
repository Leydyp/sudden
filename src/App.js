
import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Saludo from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Saludo/>
    </div>
  );
}

export default App;


