import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

  } from "react-router-dom";
import Todo  from './todo/todo';
import About from './about/about';  
import './global.css'

export default function App() {
  return (
    <Router>
        <Switch>
            <Route>
            <Route exact path='/todo' component={Todo} />
            <Route exact path='/about' component={About} />
            <Redirect from='*' to='/todo'/>
            </Route>
        </Switch>
    </Router>
  );
}