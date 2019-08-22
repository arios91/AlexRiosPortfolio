import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import './App.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
        </div>
      </Router>
    </HttpsRedirect>
  );
}

export default App;
