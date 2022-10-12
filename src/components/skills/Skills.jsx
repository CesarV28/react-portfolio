
import { Backend } from './Backend';
import { Frontend } from './Frontend';
import { ProjectManager } from './ProjectManager';
import './skills.css';

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">My skills</h2>
        <span className="section__subtitle">Technical level</span>

        <div className="skills__container container grid">
            <Frontend/>

            <Backend/>

            <ProjectManager/>
        </div>
    </section>
  )
}
