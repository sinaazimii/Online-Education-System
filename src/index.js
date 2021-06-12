import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";



// const express = require('express');
// const app = express()

// var router = express.Router();
// var User = require('./User')

// router.get('/' , function(req , res , next){
//   res.render('index',{title:'Express'});
// });

// router.post('/register',function(req,res){
//   var username = req.body.username
//   var password = req.body.password
//   var firstname = req.body.firsname
//   var lastname  = req.body.lastname

//   var newuser = new User() ;
//   newuser.username = username;
//   newuser.password = password;
//   newuser.firstname = firstname;
//   newuser.lastname = lastname;
//   newuser.save(function(err,savedUser){
//     if(err){
//       console.log(err)
//       return res.status(500).send();
//     }
//     return res.status(200).send();
     
//   });
// });

// module.exports = router

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
