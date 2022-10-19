
import { useProjects } from './hooks/useProjects';
import { ProjectItem } from './ProjectItem';
import './work.css';

export const Projects = () => {

   const { active, projects, handleClick, projectNav} = useProjects();    

  return (
    <>
        <div className="project__filters">
            {projectNav.map( (item, index) => (
                <span 
                    key={index} 
                    className={`${active === index ? 'active-filter' : '' } project__item`}
                    onClick={(e) => handleClick( e, index )}
                >
                        { item.filter }
                </span>
            )) }
        </div>

        <div className="project__container container grid">
            {projects.map( project => 
                    (<ProjectItem 
                        project={project} 
                        key={project.id}
                    />)
                )
            }
        </div>
    </>
  )
}
