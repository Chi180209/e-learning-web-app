import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home-User/Home'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/' component={Login}/>
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/register' component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
