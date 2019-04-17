import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AWS from 'aws-sdk';
import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react';
import AWSConfig from './config/aws';

import  Login  from './login/login';
import {Home} from './login/home';
import {history} from './history/history';
import RegisterPage from './RegisterPage/RegisterPage';
import  Books  from './Books/books';
import { Issue } from './IssueBook/issueBook';
import { Return } from './returnBook/returnBook';
import { Setting } from './settings';
import  store  from './redux/store';

Amplify.configure({
	Auth: {
		mandatorySignIn: false,
		region: AWSConfig.cognito.REGION,
		identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
		userPoolId: AWSConfig.cognito.USER_POOL_ID,
		userPoolWebClientId: AWSConfig.cognito.APP_CLIENT_ID
	}
});

Auth.currentSession()
	.then(data => {
		let loginurl = 'cognito-idp.' + AWSConfig.cognito.REGION + '.amazonaws.com/' + AWSConfig.cognito.USER_POOL_ID
		// Add the User's Id Token to the Cognito credentials login map.
		AWS.config.region = AWSConfig.cognito.REGION;
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
			Logins: {
				[loginurl]: data.getIdToken().getJwtToken()
			}
		});
	})
	.catch(err => {
		console.log(err)
	});

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
      <div>
        <Router history={history}>
          <div>
           {/* <Route path="/" exact component={Login} /> */}
           <Route path="/register" exact component= {RegisterPage} />
           <Route path="/" exact component={Home} />
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

let AppWrapper = withAuthenticator(App, true)

export default AppWrapper;
