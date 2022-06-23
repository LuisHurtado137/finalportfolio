import styled from "styled-components";

export const Navbar = styled.nav`
  box-shadow: 2px 10px 15px #101010;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: #171717;
  z-index: 1;

  & img {
    width: 80px;
  }
`;

export const NavLink = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 768px) {
    z-index: 1;
    flex-direction: column;
    background-color: #262626;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledLink = styled.li`
  cursor: pointer;
  font-size: 16px;
  list-style: none;
  text-align: center;
  width: 100px;

  & a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    text-decoration-line: line-through;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
