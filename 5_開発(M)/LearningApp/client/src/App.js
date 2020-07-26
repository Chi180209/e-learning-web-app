import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home-User/Home'

import FooterPage from './components/Footer_contact'
import CenterText from './components/Center_text';
import List from './components/List';
import Img1 from './Images/Words_List/IT.jpg'
import CreateWordList from './pages/CreateWordList/CreateWordList'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/' component={CreateWordList}/>
          <Route exact path = '/login' component={Login}/>
          <Route exact path = '/register' component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
