import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Item";

const ItemList = ({}) => {
  const listaProductos = [
    {
      id: 1,
      title: "Wafle con frutos rojos",
      description:
        "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
      price: 200,
      image: "./img/wafles-frutos.jpg",
    },

    {
      id: 2,
      title: "Wafle con dulce de leche",
      description:
        "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
      price: 350,
      image: "./img/brownie.jpg",
    },
    {
      id: 3,
      title: "Sweet",
      description:
        "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
      price: 180,
      image: "./img/sweet.jpg",
    },
    {
      id: 4,
      title: "Macarrons",
      description:
        "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus sem eget mattis porta.",
      price: 150,
      image: "./img/macarrons.jpg",
    },
  ];

  const [producto, setProducto] = useState([]);

  const obtenerProductos = async () => {
    setTimeout(() => {
      const datosProductos = listaProductos;
      setProducto(datosProductos);
    }, 2000);
  };

  useEffect(function () {
    obtenerProductos();
  }, []);

  return (
    <>

<div className="cards-list">

        {producto?.map((item) => (
          <Card Key={item} >
            <a>
            <img src={item.image} alt={item.title}/>
            <h2>{item.title} </h2>
            <h4>${item.price}</h4>
            </a>
          </Card>
        ))}
      
  <div className="card1">
    <div className="card_image"></div>
  </div>
</div>













      <CardContainer>
        {producto?.map((item) => (
          <Card Key={item} >
            <a>
            <img src={item.image} alt={item.title}/>
            <h2>{item.title} </h2>
            <h4>${item.price}</h4>
            </a>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};
export default ItemList;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  aling-items: center;
  
`;
