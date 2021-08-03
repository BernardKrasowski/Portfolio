import React from 'react'
import { Route, Switch, } from 'react-router-dom'


import HomePage from '../pages/HomePage.js'
import ProjectsListPage from '../pages/ProjectsListPage.js'
import ProjectsPage from '../pages/ProjectsPage.js'
import ContactPage from '../pages/ContactPage.js'
import AdminPage from '../pages/AdminPage.js'
import ErrorPage from '../pages/ErrorPage.js'
import LoginPage from '../pages/LoginPage.js'


function Page() {


  return (
    <>
      <div className="pageAnime">

        <Switch >
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/projects' component={ProjectsListPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
          <Route path='/admin' component={AdminPage}></Route>
          <Route path='/login' component={LoginPage}></Route>

          <Route path='/project/:id' component={ProjectsPage}></Route>

          <Route component={ErrorPage}></Route>
        </Switch>

      </div>

    </>
  )
}
export default Page
