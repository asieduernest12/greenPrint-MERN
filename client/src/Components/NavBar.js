import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import brandIcon from './greenprintLogo1.png';

import Image from './react-bootstrap/Image';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './mainStyle/navStyle.css';

export default class NavBar extends Component {
constructor(props){
    super(props)
    this.state = {
        displayDrop: false,
    }

}
    render() {

    return(
    <div className="navBarContainer">
        <Router>

            <Navbar collapseOnSelect expand='lg'>
                <Navbar.Brand>
                    <img src />
                    <Link to='/'> Paperwork </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">        
                    <Nav className="mr-auto">
                        <Nav.Link><li><Link to='/support'>Support</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/calculator'>Budget Calculator</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/connect'>Connect</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/about'>About</Link></li></Nav.Link>

                        <NavDropdown title="" id="collasible-nav-dropdown">
                            <NavDropdown.Item><li className=""><Link to='/support'>Support</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className=""><Link to='/calculator'>Budget Calculator</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className=""><Link to='/connect'>Connect</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className=""><Link to='/about'>About</Link></li> </NavDropdown.Item>
                        </NavDropdown>                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
</Router>
    </div>
    )
    }
}

