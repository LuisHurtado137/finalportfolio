import { SkillContainer, Card } from "../styles/skillsStyles";
import nezuko from "../assests/nezukooo.png";

//
import { skillsData } from "../database/dataBase";

export function Skills() {
  return (
    <SkillContainer id="skills">
      <h2>
        My
        <br />
        <img src={nezuko} alt="Goku animated" />
        skills
      </h2>
      <Card className="fadeEffect">
        {skillsData.map((skill) => (
          <img src={skill.imag} alt={skill.name} />
        ))}
      </Card>
    </SkillContainer>
  );
}
