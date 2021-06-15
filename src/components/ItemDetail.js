import React, { useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import product_card from "./Product_data";
import "./ItemDetail.css";





const ItemDetail = ({ initial, stock }) => {
  const { productId } = useParams();
  const thisProduct = product_card.find((prod) => prod.id === productId);
  const [counter, setCounter] = useState(0);
  const [stockRequired, setStockRequired] = useState();

  const [error, setError] = useState(initial);
 const [compraterminada, setCompraTerminada] = useState(false);

const Boton = () =>{
  let resultado ="";
  if (compraterminada) {
    resultado = <NavLink to={'/carrito'}><button className="cart">Terminar Compra: {counter}</button></NavLink>
  } else {
    resultado= <button className="cart"> Agregar</button>
  }
return (resultado)
}


  const changeCounter = (value) => {
    if (counter + value > -1) {
      setCounter(counter + value);
      setCompraTerminada(true);
      setStockRequired(stockRequired + 1);

    }else {
      setError("no hay mas stock");
    }

  };

  
  return (
    <>
    <h2>Detalle Productos</h2>
      <div className="contenedor">
        <div className="details">
          <div className="big-img">
            {" "}
            <img src={thisProduct.image} alt={thisProduct.title} />
          </div>
          <div className="box">
            <div className="row">
              <h2>{thisProduct.title}</h2>
            </div>
            <span className="price">${thisProduct.price}</span>
            <p>{thisProduct.description}</p>

            <div className="thumb">
              <img src={thisProduct.image} alt={thisProduct.title} />
            </div>
           
            <div className="row">
        
           
        
        <button className="cart"type="button" onClick={() => changeCounter(-1)}>
          -
        </button> {counter}<button className="cart"type="button" onClick={() => changeCounter(1)}>
          + </button> 
        </div>
        <Boton/>
          </div>
        </div>
        <div>
     
    </div>

      </div>
    </>
  );
};

export default ItemDetail;
