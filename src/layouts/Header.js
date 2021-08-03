import React from 'react'
import '../styles/Header.css'

import { Route, Switch } from 'react-router-dom'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

function Header() {
  const styleSection =
    [
      { backgroundImage: `url(${img1})` },
      { backgroundImage: `url(${img2})` },
      { backgroundImage: `url(${img3})` }
    ];
  return (
    <div>
      <Switch>
        <Route path='/' exact render={() => <div className='header__img' style={styleSection[0]}></div>}></Route>
        <Route path='/projects' exact render={() => <div className='header__img' style={styleSection[1]}></div>}></Route>
        <Route path='/contact' exact render={() => <div className='header__img' style={styleSection[2]}></div>}></Route>
      </Switch >
    </div>
  )
}

export default Header
