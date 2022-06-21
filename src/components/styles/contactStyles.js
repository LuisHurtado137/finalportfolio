import styled from "styled-components";

export const ContactPage = styled.div`
  align-items: center;
  background: url("https://images7.alphacoders.com/737/thumb-1920-737400.jpg")
    fixed no-repeat center;
  display: flex;
  flex-direction: column;
  font-family: "Exo", sans-serif;
  height: 100vh;
  justify-content: space-evenly;

  & p {
    background: #00000085;
    padding: 10px;
  }
`;
export const ContactForm = styled.form`
  align-items: center;
  background-color: #00000052;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
  width: 300px;
`;
export const InfoInput = styled.input`
  height: 30px;
`;

export const ButtonForm = styled.button`
  height: 30px;
  margin: 10px;
  width: 150px;

  &:hover {
    background-color: #00000052;
    color: white;
  }
`;
