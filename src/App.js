import {MyNavbar} from './Pages/Home/Navbar'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Pages/Login/login.css'
import './Pages/Home/styles.css'
import Login from "./Pages/Login/LoginForm";
import SignUp from "./Pages/Login/SignUpForm";
import Home from './Pages/Home/Home'
import Account from './Pages/Account/Account'
import Quiz from './Pages/Account/Quiz'

function App() {
  return (
  <Router>
    <div className="App">

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/quiz" component={Account} />
            <Route path="/take-quiz" component={Quiz} />
            <div className="auth-wrapper">
            <img src={require('./assets/login.png')} 
                            className="login-poster"
                />
           <div className="auth-inner">
                <div style={{backgroundColor:'#ff3b3f' , width:1800 , height:70 , position:'fixed' , left:0 , top:0}}>
                   <MyNavbar/>
                </div>
               
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </div>
           </div>
           
          </Switch>

    </div></Router>
  );
}

export default App;
