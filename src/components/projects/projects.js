import {
  ProjectContainer,
  CardContainer,
  ProjectCard,
} from "../styles/projectsStyles";
import { projects } from "../database/dataBase";

export function Projects() {
  return (
    <ProjectContainer id="projects">
      <h2>My Projects</h2>
      <CardContainer>
        {projects.map((projects) => (
          <ProjectCard>
            <img src={projects.image} alt="screenshot" />
            <br />
            <h3>{projects.title}</h3>
            <br />
            <h5>{projects.tools}</h5>
            <br />
            <p>{projects.description}</p>
            <br />
            <a href={projects.link}> Check the project</a>
          </ProjectCard>
        ))}
      </CardContainer>
    </ProjectContainer>
  );
}
