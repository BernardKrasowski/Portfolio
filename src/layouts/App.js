import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation.js'
import Page from './Page.js'
import Footer from './Footer.js'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className="page">
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
