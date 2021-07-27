import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation.js'
import Page from './Page.js'

function App() {


  return (

    <div className="app">

      <Router>
        <header>
          <Header />
        </header>
        <main>
          <aside>
            <Navigation />
          </aside>
          <section className="page">
            <Page />
          </section>
        </main>
      </Router>


    </div>

  );
}

export default App;
