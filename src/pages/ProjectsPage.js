import React, { useState } from 'react';
import '../styles/Projects.css';
import CloseIcon from '@material-ui/icons/Close';
import blackJack1 from '../imgProjects/blackJack/blackJack1.png'
import blackJack from '../imgProjects/blackJack/blackJack.png'
import blackJack2 from '../imgProjects/blackJack/blackJack2.png'

const projects = [
  {
    img1: blackJack1,
    img2: blackJack,
    img3: blackJack2,
    title: 'BlackJack Game',
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam reprehenderit odio magni? Ullam repellat aliquid quaerat amet eveniet. Architecto nulla unde voluptatum obcaecati odio beatae quaerat in dolores doloribus."
  },
  {
    img: '',
    title: 'Image',
    info: 'img2'
  },
  {
    img: '',
    title: 'Image',
    info: 'img3'
  },
]
function ProjectsPage() {

  const [activePopap, setActivePopap] = useState(false);
  const [description, setDescription] = useState('test description');
  const [imgPopap1, setImgPopap1] = useState('');
  const [imgPopap2, setImgPopap2] = useState('');

  const showPopap = (description, img2, img3) => {
    setActivePopap(!activePopap)
    setDescription(description)
    setImgPopap1(img2)
    setImgPopap2(img3)
  }
  const closePopap = () => {
    setActivePopap(!activePopap)
  }
  const showBigImg = () => {

  }
  return (
    <>
      {activePopap ?
        <div className="container__popap">
          <button className="popap__close" > <CloseIcon className='icon__close' onClick={closePopap} /></button >
          <img className='img__popap' src={imgPopap1} alt="" onClick={showBigImg} />
          <img className='img__popap' src={imgPopap2} alt="" />
          <p>{description}</p>
        </div >
        : null
      }

      <div className='wrapper__gallery'>
        <div className="gallery">
          {projects.map(({ img1, img2, img3, title, info }, index) => (
            <div key={index} className="container">
              <p className='project__title'>Title: {title}</p>
              <img src={img1} className="container__img" />
              <div className="overlay">
                <button className="moreInf" onClick={() => showPopap(info, img2, img3)}>Show more information</button></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ProjectsPage
