import skills from "../skills";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>
        Skills
        <span className="material-symbols-outlined">south</span>
      </h1>
      <ul>
        {
          skills.map((skill) => {
            return <li key={skill.id}>
              <img src={skill.src} alt="icon" />
              <h3>{skill.name}</h3>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Skills;