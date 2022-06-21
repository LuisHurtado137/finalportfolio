import aboutCard from "../assests/aboutCard.png";
import aboutResponsive from "../assests/responsiveCard.png";
import { AboutContainer, AboutDescription } from "../styles/aboutStyles";

export function About() {
  return (
    <AboutContainer id="about">
      <h2>About me</h2>
      <img className="full-image" src={aboutCard} alt="About card" />
      <img
        className="mobile-image"
        src={aboutResponsive}
        alt="Responsive about card"
      />
      <AboutDescription>
        I'm Luis, I love anime and videogames, I like learn from others, also
        I'm a creative, proactive and supportive person.
        <br />
        <br />
        I want to build an application that contributes to society or a
        videogame that impact the world.
        <br />
        That is my ninja way.
      </AboutDescription>
    </AboutContainer>
  );
}
