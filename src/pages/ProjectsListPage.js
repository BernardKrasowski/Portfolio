import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Projects.css';
import { projects } from '../data/data.js'

function ProjectsListPage() {
  return (
    <>
      <div className='wrapper__gallery'>
        <div className="gallery">

          {projects.map(({ img1, img2, title, info, link }, index) => (
            <div key={index} className="container">
              <p className='project__title'>Title: {title}</p>
              <img src={img1} className="container__img" />
              <div className="overlay">
                <Link to={`/project/${link}`}><button className="moreInf">Show more information</button></Link></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectsListPage
