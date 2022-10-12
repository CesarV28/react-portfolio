import React from 'react'

export const ProjectItem = ({ project }) => {
  return (
    <div className="project__card">
        <img src={project.image} alt={`${project.title} image`} className="project__img" />
        <h3 className="project__title">{ project.title }</h3>
        <a href={ project.url } className="project__button" target={'_blank'}>
            Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
        </a>
    </div>
  )
}
