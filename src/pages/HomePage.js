import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css'

function HomePage() {

  const [title, setTitle] = useState(false);
  const [txt, setTxt] = useState(false);

  useEffect(() => {
    let timeoutSecond = '';
    let timeoutFirst = setTimeout(() => {
      setTitle(!title)
      timeoutSecond = setTimeout(() => {
        setTxt(!txt);
      }, 800);
    }, 500);
    return function cleanup() {
      clearTimeout(timeoutFirst)
      clearTimeout(timeoutSecond)
    }
  }, []);

  return (
    <>
      <div className="aboutMe">
        {title ? <h1 className='aboutMe__title'>Hi, My name is Bernard Krasowski</h1> : false}
        {txt ? <p className='aboutMe__txt'>
          I started my adventure as a front end developer 1.5 years ago. I have basic knowledge about various technologies that I supplement every day. In my professional life I would like to focus on developing my skills. I am looking for a company that will give me a chance to develop in this direction and help in future professional successes.
        </p> : false}
      </div>
    </>
  )
}
export default HomePage
