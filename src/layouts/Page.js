import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage.js'
import ProjectsPage from '../pages/ProjectsPage.js'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage.js'


function Page() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/projects' component={ProjectsPage}></Route>
        <Route path='/contact' component={ContactPage}></Route>
        <Route path='/admin' component={AdminPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  )
}

export default Page
