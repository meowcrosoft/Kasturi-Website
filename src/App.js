import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Project from './pages/project';
import Art from './pages/art';
import SignUp from './pages/signup';
import Tata from './pages/projects/tata';
import Vermillion from './pages/projects/vermillion';
import Absolut from './pages/projects/absolut';
import Balaji from './pages/projects/balaji';
import Burger from './pages/projects/burger';
import Masina from './pages/projects/masina';
import Tipsy from './pages/projects/tipsy';
import Zaga from './pages/projects/zaga';
import Brands from './pages/projects/brands'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-me' component={About} />
        <Route path='/project-lab' component={Project} />
        <Route path='/tata' component={Tata} />
        <Route path='/vermillion' component={Vermillion} />
        <Route path='/absolut' component={Absolut} />
        <Route path='/balaji' component={Balaji} />
        <Route path='/absolut' component={Absolut} />
        <Route path='/burger' component={Burger} />
        <Route path='/masina' component={Masina} />
        <Route path='/tipsy' component={Tipsy} />
        <Route path='/brands' component={Brands} />
        <Route path='/zaga' component={Zaga} />
        <Route path='/art-collection' component={Art} />
      </Switch>
    </Router>
  );
}

export default App;
