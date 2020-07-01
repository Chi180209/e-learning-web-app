import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home-User/Home'
import FooterPage from './components/Footer_contact'
import Center_text from './components/Center_text';
import List from './components/List';
import Img1 from './Images/Words_List/IT.jpg'

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

      <div id="Current_Best">
        <Center_text text="最近リスト"/>

        <div className="container-fluid p-0">
          <div className="row no-gutters">
                <List
                    path={Img1}
                    list_category="IT"
                    list_name="IT専門用語"/>
                <List
                    path={Img1}
                    list_category="IT"
                    list_name="IT専門用語"/>
                <List
                    path={Img1}
                    list_category="IT"
                    list_name="IT専門用語"/>
                <List
                    path={Img1}
                    list_category="IT"
                    list_name="IT専門用語"/>
          </div>
        </div>
      </div>

      <FooterPage/>
    </div>
  );
}

export default App;
