import styled from "styled-components";

export const AboutContainer = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin: 20px;

    & img {
        border-radius: 30px;
        margin: 30px; 
        width: 800px;
    }

    & .mobile-image {
        display: none;
        width: 350px; 
    }

    @media only screen and (max-width: 768px) {
        height: 100%;
        margin: 0;

        .mobile-image {
            display block;
        } 

        .full-image {
            display: none;
        }
    }
`;
export const AboutDescription = styled.p`
  font-family: "Exo", sans-serif;
  font-size: 25px;
  width: 70%;
`;
