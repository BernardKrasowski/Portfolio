import React from 'react';
import { projects } from '../data/data'
import '../styles/project.css'

function ProjectsPage({ match }) {

  const { id } = match.params
  return (
    <div className='project'>
      <img className='project__img-1' src={projects[id].img2} alt="" />
      <div className="description">{projects[id].info}</div>
      <img className='project__img-2' src={projects[id].img1} alt="" />

    </div>

  )
}
export default ProjectsPage
