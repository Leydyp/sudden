import React, {useState, useEffect}from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from './Item';
import product_card from './Product_data';

const Products = () => {
  const [producto, setProducto] = useState([]);

  const obtenerProductos = async () => {
    setTimeout(() => {
      const datosProductos = product_card;
      setProducto(datosProductos);
    }, 2000);
  };

  useEffect(function () {
    obtenerProductos();
  }, []);

  const products = product_card?.map(product => {
    return (
      <>
        <CardContainer>
          {producto?.map((item) => (
            <Card Key={item} >
            
              <img src={item.image} alt={item.title}/>
              <NavLink to={`/products/${item.id}`}>{item.title}</NavLink>

              <h4>${item.price}</h4>
              
            </Card>
          ))}
        </CardContainer>
      </>
    );
  });

  return (
    <>
      <h1>Nuestros destacados</h1>
      {products}
    </>
  );
};

export default Products;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  aling-items: center;
  
`;




