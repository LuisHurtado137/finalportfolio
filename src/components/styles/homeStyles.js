import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const MainContent = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

export const Article = styled.article`
  font-family: "Mochiy Pop P One", sans-serif;
  font-size: 50px;
  height: 70px;
  margin: 10px;
  text-align: center;
  width: 100%;

  & a img {
    animation: rotation 2s infinite;
    width: 60px;
    position: relative;
    top: 10px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 800px) {
    a img {
      width: 30px;
      top: 6px;
    }
  }
`;

export const SocialMedia = styled.article`
  display: flex;
  justify-content: space-evenly;
  width: 60%;

  & a img {
    cursor: pointer;
    filter: grayscale(1);
    margin: 5px;
    transition: transform 0.2s;
    width: 35px;
  }
  & a img:hover {
    filter: none;
    transform: scale(1.2);
  }
`;
