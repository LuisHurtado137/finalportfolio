import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: white;
  font-family: "Syne Tactile", cursive;

  & h1 {
    font-size: 60px;
  }

  & h2 {
    font-size: 32px;
  }

  & h3 {
    font-size: 28px;
  }

  & p {
    font-size: 20px;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 15px;
    }
  }
`;
