import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Videos from './Pages/Videos';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/categories">Categorías</Link></li>
            <li><Link to="/videos">Videos</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/videos" component={Videos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
