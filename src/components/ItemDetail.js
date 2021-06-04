import React from "react"
import {useParams} from "react-router-dom"
import product_card from "./Product_data"
import styled from "styled-components";
import Card from "./Item";


function ItemDetail() {
    const {productId} = useParams()
    const thisProduct = product_card.find(prod => prod.id === productId)
    
    return (        
<>
<h1>Detalle producto</h1>
        <CardContainer>
        <Card>
            <img src={thisProduct.image} alt={thisProduct.title}/>
            
            <h1>{thisProduct.title}</h1>
            <p>Precio: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
            </Card>
        </CardContainer>
        </>
    )
}

export default ItemDetail


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  aling-items: center;
  
`;