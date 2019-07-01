import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './navi';
import List from './products/list';
import Create from './products/create';
import Update from './products/update';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navi/>      
      <Router>
        <Route path='/home' component={List}/>
        <Route path='/create' component={Create}/>
        <Route path='/update' component={Update}/>
      </Router>
    </div>
  );
}

export default App;
