import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
/*import App from '../App';*/

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Components/mainStyle/navStyle.css'

import Home from './Components/Home';
import SupportPg from './Components/Support/SupportPg';
import ConnectPg from './Components/ConnectPg';
import AboutPg from './Components/AboutPg';
import MainCalc from './Components/calculator/MainCalc';

/*import Footer from './Components/Footer';*/

export default class App extends Component {
constructor(props){
    super(props)
    this.state = {
        displayDrop: false,
    }

}
    render() {

    return(
    <div className="MainContainer" style={{backgroundColor:''}}>
        <Router>

            <div className='nav'>
            <Navbar collapseOnSelect expand='lg'>
                <Navbar.Brand>
                    <img src ='' />
                    <Link to='/'> Paperwork </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">        
                    <Nav className="mr-auto">
                        <Nav.Link><li><Link to='/support'>Support</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/calculator'>Budget Calculator</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/connect'>Connect</Link></li></Nav.Link>
                        <Nav.Link><li className=""><Link to='/about'>About</Link></li></Nav.Link>

                        <NavDropdown title="" id="collasible-nav-dropdown" className="drpdwnMenu">
                            <NavDropdown.Item><li className="drpdwn"><Link to='/support'>Support</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className="drpdwn"><Link to='/calculator'>Budget Calculator</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className="drpdwn"><Link to='/connect'>Connect</Link></li> </NavDropdown.Item>
                            <NavDropdown.Item><li className="drpdwn"><Link to='/about'>About</Link></li> </NavDropdown.Item>
                        </NavDropdown>                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>


            <div className='' style = {{backgroundColor:'', margin:'5px'}}>   
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/support' exact component={SupportPg} />
            <Route path='/connect' exact component={ConnectPg} />
            <Route path='/about' exact component={AboutPg} />
            <Route path='/calculator' exact component={MainCalc} />
            </Switch>
            </div>
</Router>

    </div>
    )
    }
}
