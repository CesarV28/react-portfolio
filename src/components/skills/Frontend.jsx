import { SkillsItem } from "./SkillsItem"
import { frontendSkills } from "./data";

export const Frontend = () => {

    const { title, skills } = frontendSkills;

  return (
    <div className="skills__content">
        <h3 className="skills__title">{ title }</h3>

        <div className="skills__box">
            {/* Skill group item */}
            <div className="skills__group">
            
                {skills.map( skill => ( <SkillsItem key={skill.id} skill={skill}/>))}

            </div>
        </div>
    </div>
  )
}
