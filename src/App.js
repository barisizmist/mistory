import React, { Component } from 'react';
import Hello from './components/Hello';
import Timer from './components/timer';
import TodoApp from './components/todo';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import home from './pages/home';
import NotFound from './pages/error/NotFound';
import Nav from './components/navbar';
import api from './api/api';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/todo" component={TodoApp} />
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/api" component={api} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App;
