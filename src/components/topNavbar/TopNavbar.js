import React from 'react'
import {Navbar, Nav, FormControl} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import './topnavbar.style.css'

export const TopNavbar = () => {
    return (
      <div>
        <div className="login mt">
        <LinkContainer to="/login">
         <Nav.Link >LOGIN</Nav.Link>
         </LinkContainer>
         <Nav.Link >SIGNUP</Nav.Link>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" width="20px" />
         <i className="fas fa-cart-plus "></i>

         </div>
      
        <Navbar collapseOnSelect  variant="dark" expand="md" className="color-nav">

        <Navbar.Brand>
          PinkCo
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          <LinkContainer to="/home">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
              <Nav.Link>PRODUCTS</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
            

            <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
            </LinkContainer>

          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      
        
    )
}
