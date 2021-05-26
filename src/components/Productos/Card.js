import styled from "styled-components";

const Card = ({ image, title, children }) => {
  return (
    <Container>
      <img src={image} alt={title} />

      <Info>
        <div>{title}</div>

        <p>{children}</p>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.27);
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  overflow: hidden;

  img {
    width: 100%;
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

export default Card;
