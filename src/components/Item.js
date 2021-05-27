import styled from 'styled-components';
import React from "react";
import {listProducts} from "./ItemList";


const Catalogo = ({id, title, price, image}) =>{
        return (
          <Container>
            <img src={image} alt={title}/>
            <div>
              {listProducts.map((item, index) => {
                return (
                  <div key={index}>
                    <p className={item.cName} href={item.url}>
                      {item.titulo}
                    </p>
                  </div>
                );
              })}
            </div>
            </Container>
          
        );
    
            }
      
      const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;
     `;
  


export default Catalogo;
