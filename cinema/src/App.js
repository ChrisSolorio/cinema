import React from 'react';
import logo from './logo.svg';
import Main from './Main.js';
import Guide from './Guide';
import './App.css';
import UploadP from './Upload'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component ={Main}/>
        <Route exact path = "/Upload" component = {UploadP}/>
      </Switch>
    </Router>
  );
}

export default App;
