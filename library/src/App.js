import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Router, Switch } from 'react-router-dom'
import { Login } from './login/login'
import {Home} from './login/home'
import {history} from './history/history'
import { RegisterPage } from './RegisterPage/index';
import { Books } from './Books/books';
import { Issue } from './IssueBook/issueBook';
import { Return } from './returnBook/returnBook';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
           <Route path="/" exact component={Login} />
           <Route path="/register" exact component= {RegisterPage} />
           <Route path="/home" exact component={Home} />
           <Route path="/books" exact component={Books} />
           <Route path="/issue" exact component={Issue} />
           <Route path="/return" exact component={Return} />
           </div>
           </Router>
      </div>
    );
  }
}

export default App;
