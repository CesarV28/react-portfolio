import React from 'react'

export const SkillsItem = ({ skill }) => {
  return (
    
    <div className="skills__data" key={skill.id}>
        <i className='bx bxs-badge-check'></i>
        <div>
            <h3 className="skills__name">{ skill.name }</h3>
            <span className="skills__level">{ skill.level }</span>
        </div>
    </div>

  )
}
