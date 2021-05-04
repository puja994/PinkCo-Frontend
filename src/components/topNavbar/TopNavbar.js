import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import './topnavbar.style.css'

export const TopNavbar = () => {
    return (
      
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

            
  

            <Nav.Link >LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
        
    )
}
