import React from 'react';
import {MyCarousel} from './../Home/Carousel'
import './../Home/styles.css'
import {MyNavbar} from './Navbar'
import 'gestalt/dist/gestalt.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './../Login/login.css';


export default class Home extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render(){
        return(

            <div className="all-page">

                <div className="navbar-container">
                <MyNavbar/>
                </div>
                <div className="carousel"><MyCarousel/></div>
                

                <div className="third-part">
                    <div className="icon-container">
                        <img src={require('./../../assets/class.png')} 
                            height='110px'
                            width='110px'
                            className="icons"
                        />
                        <p className="icon-head icon-txt">Class Managment</p>
                        <p className="icon-txt">Manage you classes and handle them</p>
                        <p className="icon-txt">properly, nothing goes out of control</p>
                        <Link  className="icon-txt" href="#" >
                            Learn more
                        </Link>
                    </div>

                    <div className="icon-container">
                        <img src={require('./../../assets/chat-red.png')} 
                            height='110px'
                            width='110px'
                            className="icons"
                        />
                        <p className="icon-head icon-txt">Class Managment</p>
                        <p className="icon-txt">Manage you classes and handle them</p>
                        <p className="icon-txt">properly, nothing goes out of control</p>
                        <Link  className="icon-txt" href="#" >
                            Learn more
                        </Link>
                    </div>

                    <div className="icon-container">
                    <img src={require('./../../assets/quiz-red.png')} 
                            height='110px'
                            width='110px'
                            className="icons"
                        />
                        <p className="icon-head icon-txt">Class Managment</p>
                        <p className="icon-txt">Manage you classes and handle them</p>
                        <p className="icon-txt">properly, nothing goes out of control</p>
                        <Link  className="icon-txt" href="#" >
                            Learn more
                        </Link>                      
                    </div>

                    <div className="icon-container">
                    <img src={require('./../../assets/live.png')} 
                            height='110px'
                            width='110px'
                            className="icons"
                        />
                        <p className="icon-head icon-txt">Class Managment</p>
                        <p className="icon-txt">Manage you classes and handle them</p>
                        <p className="icon-txt">properly, nothing goes out of control</p>
                        <Link  className="icon-txt" href="#" >
                            Learn more
                        </Link>                   
                    </div>

                </div>

                <div className="bottom-part">
                    <div className="endlinks-container"></div>

                    <div className="endlinks-container">
                        <a className="endlinks" href="#"><p className="small-link endlinks-header">About</p></a>
                        <a className="endlinks" href="#"><p >Careers</p></a>
                        <a className="endlinks" href="#"><p >Integrations</p></a>
                        <a className="endlinks" href="#"><p >Partners</p></a>
                        <a className="endlinks" href="#"><p >Investors</p></a>
                        <a className="endlinks" href="#"><p >How to Videos</p></a>
                    </div>

                    <div className="endlinks-container">
                        <a className="endlinks" href="#"><p className=" endlinks-header">Download</p></a>
                        <a className="endlinks" href="#"><p>Careers</p></a>
                        <a className="endlinks" href="#"><p>Integrations</p></a>
                        <a className="endlinks" href="#"><p>Partners</p></a>
                        <a className="endlinks" href="#"><p >Investors</p></a>
                        <a className="endlinks" href="#"><p >How to Videos</p></a>
                    </div>

                    <div className="endlinks-container">
                        <a className="endlinks" href="#"><p className="endlinks-header">Sales</p></a>
                        <a className="endlinks" href="#"><p>Careers</p></a>
                        <a className="endlinks" href="#"><p>Integrations</p></a>
                        <a className="endlinks" href="#"><p>Partners</p></a>
                        <a className="endlinks" href="#"><p>Investors</p></a>
                        <a className="endlinks" href="#"><p>How to Videos</p></a>
                    </div>

                    <div className="endlinks-container">
                        <a className="endlinks" href="#"><p className="endlinks-header">Support</p></a>
                        <a className="endlinks" href="#"><p>Careers</p></a>
                        <a className="endlinks" href="#"><p>Integrations</p></a>
                        <a className="endlinks" href="#"><p>Partners</p></a>
                        <a className="endlinks" href="#"><p>Investors</p></a>
                        <a className="endlinks" href="#"><p>How to Videos</p></a>                    
                    </div>
                    <div className="endlinks-container contact">
                        <a href="#"><img
                            src={require('./../../assets/linkedin.png')}
                            height='55px'
                            width='55px'
                            />
                        </a>
                        <a href="#"><img
                            src={require('./../../assets/fb.png')}
                            height='40px'
                            width='40px'
                            className="fb"
                            />
                        </a>
                        <a href="#"><img
                            src={require('./../../assets/twitter.png')}
                            height='46px'
                            width='42px'
                            className="twitter"
                            />
                        </a>
                        <a href="#"><img
                            src={require('./../../assets/youtube.png')}
                            height='55px'
                            width='55px'
                            />
                        </a>
                    </div>                    
                </div>
                   
            </div>

            );
    };
    
}


