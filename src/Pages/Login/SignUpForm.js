import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname :'',
            lastname : '' ,
            email : '',
            password :''
        };
    };
    submit = (event) => {
        event.preventDefault();
        this.setState({
            email : event.target.email ,
            password : event.target.password ,
            lastname : event.target.lastname ,
            firstname : event.target.firstname ,
        })

        const payload = {
            email: event.target.email,
            password: event.target.password ,
            firstname : event.target.firstname ,
            lastname : event.target.lastname 
          };
          axios({
            url: '/api/save',
            method: 'POST',
            data: payload
          })
            .then(() => {
              console.log('Data has been sent to the server');
              this.resetUserInputs();
              this.getBlogPost();
            })
            .catch(() => {
              console.log('Internal server error');
            });;
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to="/quiz" type="submit" className="btn btn-primary btn-block">SignUp</Link>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}