import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hello from './components/Hello';
import Timer from './components/timer';
import TodoApp from './components/todo';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import home from './pages/home';
import NotFound from './pages/error/NotFound';
import Nav from './components/navbar';
import Footer from './components/footer';
import api from './api/api';
import './App.scss'
import about from './pages/about';
import login from './components/login';
import users from './components/users';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/todo" component={TodoApp} />
          <Route exact path="/hello" component={() => <Hello name={`There`} />} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/api" component={api} />
          <Route exact path="/about" component={about} />
          <Route exact path="/login" component={login} />
          <Route exact path="/users" component={users} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
