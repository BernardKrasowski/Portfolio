import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
  {
    name: 'About Me',
    path: '/',
    exact: true
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Admin',
    path: './login'
  }
]

function Navigation() {
  const menu = list.map((item, index) => (
    <li key={index}><NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
  ))
  return (
    <nav className='main'>
      <ul>
        {menu}
      </ul>
    </nav>
  )
}

export default Navigation
