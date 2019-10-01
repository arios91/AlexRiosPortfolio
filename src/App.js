import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
// import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    // <HttpsRedirect>
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
        </div>
      </Router>
    // </HttpsRedirect>
  );
}

export default App;
