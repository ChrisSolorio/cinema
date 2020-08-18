import React from 'react';
import Main from './component/Main.js';
import './App.css';
import UploadP from './component/Upload'
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
