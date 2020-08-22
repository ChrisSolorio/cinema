import React from 'react';
import Main from './component/Main.js';
import './App.css';
import Upload from './component/Upload'
import Movie from './component/MoviePage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component ={Main}/>
        <Route exact path = "/Upload" component = {Upload}/>
        <Route path = "/MoviePage" component = {Movie}/>

      </Switch>
    </Router>
  );
}

export default App;
