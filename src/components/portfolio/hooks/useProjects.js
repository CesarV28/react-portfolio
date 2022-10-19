import { useEffect, useState } from "react";
import { projectNav, projectsData } from '../data';

export const useProjects = () => {

    const [projectFilter, setProjectFilter] = useState({ filter: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);


    useEffect(() => {
      
        if(projectFilter.filter === 'all'){
            setProjects(projectsData);
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

    return {
        projects,
        active,
        projectNav,

        handleClick
    }
}