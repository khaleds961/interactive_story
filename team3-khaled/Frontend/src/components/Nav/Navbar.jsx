import { Component } from "react";
import * as ReactBootSrap from "react-bootstrap";
import "./Navbar.css";

export default class NavBar extends Component{
    render(){
        return (
            <div className=".container-fluid ">
             
            <ReactBootSrap.Navbar collapseOnSelect expand="lg" className="NavBars" bg="dark" variant="dark" >
          <ReactBootSrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootSrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootSrap.Nav className="mr-auto">
            <ReactBootSrap.Navbar.Brand href="#home">
                <h2>Daily Blogs</h2>
                </ReactBootSrap.Navbar.Brand>
              <ReactBootSrap.Nav.Link href="#features" >
                <h4>+Write Your Blog</h4>
                </ReactBootSrap.Nav.Link>
              {/* <ReactBootSrap.Nav.Link href="#pricing">Pricing</ReactBootSrap.Nav.Link> */}

              <h4>
              <ReactBootSrap.NavDropdown title="Topics" id="collasible-nav-dropdown" >
                <ReactBootSrap.NavDropdown.Item  href="#action/3.1" >Sport</ReactBootSrap.NavDropdown.Item>
                <ReactBootSrap.NavDropdown.Item href="#action/3.2">IT</ReactBootSrap.NavDropdown.Item>
                <ReactBootSrap.NavDropdown.Item href="#action/3.3">Politics</ReactBootSrap.NavDropdown.Item>
                <ReactBootSrap.NavDropdown.Divider />
                {/* <ReactBootSrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootSrap.NavDropdown.Item> */}
              </ReactBootSrap.NavDropdown>
              </h4>
              
        
            </ReactBootSrap.Nav>
            {/* <ReactBootSrap.Nav>
              <ReactBootSrap.Nav.Link href="#deets">More deets</ReactBootSrap.Nav.Link>
              <ReactBootSrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootSrap.Nav.Link>
            </ReactBootSrap.Nav> */}
            <ReactBootSrap.Form inline>
              <ReactBootSrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <ReactBootSrap.Button variant="secondary">Search</ReactBootSrap.Button>
            </ReactBootSrap.Form> 
          </ReactBootSrap.Navbar.Collapse>
        </ReactBootSrap.Navbar>
            </div>
        )
    }
}
