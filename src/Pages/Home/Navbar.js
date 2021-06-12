import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav , NavDropdown , Navbar} from 'react-bootstrap'


export const MyNavbar = () =>{
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="" fixed="top" >
        <Navbar.Brand className="navbar-nav comment" href="./">Online Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link  className="navbar-nav comment" href="#support">Support</Nav.Link>
            <Nav.Link  className="navbar-nav comment" href="#pricing">Pricing</Nav.Link>
            <NavDropdown className="navbar-nav comment" title="Features" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Video Streaming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Quiz</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Class Managment</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link className="navbar-nav comment" href='./sign-in'>Login</Nav.Link>
            <Nav.Link className="navbar-nav comment" eventKey={2} href="./sign-up">
                Sign up
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    );

}
