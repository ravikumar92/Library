import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import { connect } from 'react-redux';
import { login } from '../redux/action/loginAction'
import book from '../images/book.jpeg';
import {history} from '../history/history'

class Login extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           userName: '',
           password: '',
       }
       this.onEmailValue = this.onEmailValue.bind(this);
       this.onPasswordValue = this.onPasswordValue.bind(this);
       this.check = this.check.bind(this);
   }

   onEmailValue(event){
       this.setState ({
           userName: event.target.value
       })
   }

   onPasswordValue(event){
    this.setState ({
        password: event.target.value
    })
}

   check(event){
       event.preventDefault();
    let { userName, password } = this.state;
    if(userName == '' || password == '') {
        return alert('User Name or Password is blank!')
    }
    console.log(this.state)
    this.props.login(this.state);
    // fetch('http://10.11.7.59:8080/login-user',{
    //     method:'POST',
    //     headers:{
    //         "Content-Type": "application/json"
    //     },
    //     body:JSON.stringify(this.state)
    // })
    // .then((res) => res.json())
    // .then((resp) => {
    //     if(resp.value == true) {
    //         history.push('/home');
    //     } else {
    //         alert(resp.message);
    //     }
    // })
   }
    render() {
        const { userName, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.check}>
                    <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                        <label htmlFor="userName">userName</label>
                        <input type="text" className="form-control" name="userName" value={userName} onChange={this.onEmailValue} />
                        {submitted && !userName &&
                            <div style={{"color": "red"}}  className="help-block">User Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.onPasswordValue} />
                        {submitted && !password &&
                            <div style={{"color": "red"}} className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { login })(Login);