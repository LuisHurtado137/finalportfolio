import styled from "styled-components";

export const ProjectContainer = styled.main`
  display: grid;
  grid-template-rows: 50px 95%;
`;
export const CardContainer = styled.article`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 30px;
  place-items: center;
`;
export const ProjectCard = styled.section`
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 15px 15px black;
  display: flex;
  flex-direction: column;
  font-family: "Exo", sans-serif;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  text-align: center;
  transition: transform 0.2s;
  width: 300px;

  &:hover {
    transform: scaleY(1.1);
  }
  & p {
    font-size: 13px;
    padding: 10px;
  }
  & img {
    border-radius: 10px;
    height: 180px;
    width: 100%;
  }
  & a {
    color: white;
  }
`;
