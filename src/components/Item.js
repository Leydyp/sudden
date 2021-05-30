import React from "react";
import styled from "styled-components";
import { useState} from "react";


const Card = ({image,children, title, initial, stock }) => {
  
  const [counter, setCounter] = useState(1);

  const [stockRequired, setStockRequired] = useState(10);
  
  const [error, setError] = useState(initial);
  
  const onAdd = () => {
    if (stock >= setStockRequired + 1) {
      setStockRequired(stockRequired + 1);
  
    } else {
      setError("no hay mas stock");
    }
  };

 
  
  const changeCounter = (value) => {
    if (counter + value > -1) {
      setCounter(counter + value);
    }
  };
  return ( <>


    <Container>
<img src={image} alt={title} />
      

      <Info>
        
        <div>{title}</div>
        <h4>{children}</h4>

        <p>
          Cantidad: {counter} <br /> {error}
        </p>
        <Button type="button" onClick={() => changeCounter(1)}>
          +{onAdd}
        </Button>
        <Button type="button" onClick={() => changeCounter(-1)}>
          -{onAdd}
        </Button>
      </Info>
    </Container>
    </>
  );
};
export default Card;

const Container = styled.div`

padding:0px;
width: 100%;
max-width: 250px;
overflow: hidden;
position: relative;
text-align: center;
border-radius: 1.5rem;
margin: 100px  auto;
background-color: var(--color-white);
box-shadow: 0 5rem 10rem -2rem rgba(222, 184, 135);
 
img {
  width:100%;
  
  
 
}  


`;



const Info = styled.div`
  padding: 15px;

  div {
    font-size: 22px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    margin: 3px 0;
  }
`;

const Button = styled.button`
  width: 30%;
  padding: 5px 22px;
  border: 0;
  gap:20px;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
`;
