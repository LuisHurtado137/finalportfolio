import akatsukiLogo from "../assests/akatsuki.png";
import { Navbar, NavLink, StyledLink } from "../styles/navStyles";

const RightNav = ({ open }) => {
  return (
    <Navbar>
      <NavLink open={open}>
        <StyledLink>
          <a href="#contact">CONTACT</a>
        </StyledLink>
        <StyledLink>
          <a href="#about">ABOUT</a>
        </StyledLink>
        <StyledLink>
          <a href="#home">
            <img src={akatsukiLogo} alt="home akatsuki logo" />
          </a>
        </StyledLink>
        <StyledLink>
          <a href="#projects">PROJECTS</a>
        </StyledLink>
        <StyledLink>
          <a href="#skills">SKILLS</a>
        </StyledLink>
      </NavLink>
    </Navbar>
  );
};

export default RightNav;
