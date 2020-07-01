import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home-User/Home'
import FooterPage from './components/Footer_contact'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/register' component={Register}/>
        </Switch>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
