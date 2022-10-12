import { useEffect } from 'react';
import { useState } from 'react';
import { projectNav, projectsData } from './data';
import { ProjectItem } from './ProjectItem';
import './work.css';

export const Projects = () => {

    const [projectFilter, setProjectFilter] = useState({ filter: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);


    useEffect(() => {
      
        if(projectFilter.filter === 'all'){
            setProjects(projectsData);
            console.log('hooa')
        }else{
            const byFilter = projectsData
            .filter( project => 
                    project.category.toLowerCase() === projectFilter.filter.toLowerCase() 
            );

            setProjects(byFilter);
        }

    }, [projectFilter]);

    const handleClick = ( e, index) => {
        setProjectFilter({ filter: e.target.textContent })
        setActive(index);
    }
    

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
