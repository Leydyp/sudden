import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import styled from "styled-components";


function ItemDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (

        
        <CardContainer>
        
        <img src={thisProduct.image} alt={thisProduct.name}/>
            <h1>{thisProduct.name}</h1>
            <p>Precio: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
            
        </CardContainer>
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