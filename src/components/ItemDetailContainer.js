import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from './Item';

const Products = () => {
  const products = productsData.map(product => {
    return (

        <CardContainer>
           
      <div key={product.id}>
          <Card>

      <img src={product.image} alt={product.name} />  
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Precio: ${product.price}</p>
       </Card>
      </div>
     
      </CardContainer>
      
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




