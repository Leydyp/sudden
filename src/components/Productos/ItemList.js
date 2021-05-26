import styled from "styled-components";
import {useState, useEffect} from 'react';
import Card from './Card';
import { listProduct } from "./ListProduct";
 

const [productos, setProductos] = useState([]);
 
useEffect (function(){
 console.log('me ejecute');
 obtenerProductos();
},[]);
 
 return (
   <CardContainer>
        {productos.map((item) => {
       return (
         <Card key={item.listProduct} image={item.img} value={title}>
           {item.description}
         </Card>
       );
     })}
   </CardContainer>
 );
  
    

const CardContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
 justify-content: center;
 align-items: center;
`;

 





 


































