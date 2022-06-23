import styled from "styled-components";

export const SkillContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
export const Card = styled.div`
  box-shadow: 2px 58px 80px #101010;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: 30px;
  padding: 20px;
  place-items: center;

  & img {
    transition: transform 0.2s;
    width: 90px;
  }

  & img:hover {
    transform: scale(1.2);
  }
`;
