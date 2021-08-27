import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About'
import Blog from './Blog'
import Blog1 from './Blog1'
import Blog2 from './Blog2'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Navbar Demo Rajesh Codes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                             </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/blog1">
                            <Blog1 />
                        </Route>
                        <Route path="/blog2">
                            <Blog1 />
                        </Route>
                    <Route path="/blogs">
                            <Blog />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        
                    </Switch>
                </div>
            </Router>
        )
    }
}
