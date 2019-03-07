import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import  Login  from './login/login'
import {Home} from './login/home'
import {history} from './history/history'
import RegisterPage from './RegisterPage/RegisterPage';
import { Books } from './Books/books';
import { Issue } from './IssueBook/issueBook';
import { Return } from './returnBook/returnBook';
import { Setting } from './settings';
import  store  from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
      <div>
        <Router history={history}>
          <div>
           <Route path="/" exact component={Login} />
           <Route path="/register" exact component= {RegisterPage} />
           <Route path="/home" exact component={Home} />
           <Route path="/books" exact component={Books} />
           <Route path="/issue" exact component={Issue} />
           <Route path="/return" exact component={Return} />
           <Route path="/setting"  exact component={Setting}/>
           </div>
           </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
