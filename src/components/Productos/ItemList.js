import styled from "styled-components";
import { useState, useEffect } from "react";
import { Card } from "@material-ui/core";



function leerLista () {
    console.log (fetch('ListProducts.js'))
}
leerLista();

const Tarjeta = ({ img, tittle, children }) => {
  /*const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("./Productos/ListProducts.js");
        const data = await response.json();
        setItem(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchResources();
  }, []);

  return (
    <Container>
      {item?.map((producto) => {
        return (
          <Card title={producto.title} image={producto.img}>
            {producto.tittle}
          </Card>
        );
      })}
    </Container>
  );*/

  return (
    <Container>
      <img src={img} alt={tittle} />

      <info>
        <div>{tittle}</div>
        <p>{children}</p>
      </info>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.27);
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  overflow: hidden;
  margin: auto;

  img {
    width: 100%;
  }
`;

const info = styled.div`
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


export default Tarjeta