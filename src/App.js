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
import './App.css'

// const Todo = () => (
//   <div>Todo
//     <Link to="/todo">Todo</Link>
//   </div>
// )
// const Abb = () => (
//   <div>Abb
//     <Link to="/Abb">Abb</Link>
//   </div>
// )

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Nav></Nav>
      //   <Route exact path="/todo" component={} />
      //   <Route exact path="/Abb" component={Todo} />
      // </BrowserRouter>
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/todo" component={TodoApp} />
          <Route exact path="/hello" component={Hello} />
          <Route exact path="/timer" component={Timer} />
          <Route exact path="/api" component={api} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
