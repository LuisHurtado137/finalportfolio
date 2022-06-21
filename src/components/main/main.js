import { Home } from "../home/home";
import { About } from "../about/about";
import { Skills } from "..//skills/skills";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";
import { Container } from "../styles/mainStyles";

export function Main() {
  return (
    <Container>
      <Home />
      <br />
      <About />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
      <Contact />
    </Container>
  );
}
