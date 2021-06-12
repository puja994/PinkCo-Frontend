import React, {useEffect}from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../pages/category/categoryAction";
import { Link } from "react-router-dom"
import './nab.css'
import {Navbar, Nav, FormControl} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Menu } from '../menuCat/Menu';


export const NavCategories = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch])
  const { categoryList } = useSelector((state) => state.category)

    return (
      <>

<Navbar collapseOnSelect  bg="dark" variant="dark" expand="md" className="color-nav">

<Navbar.Brand>
<LinkContainer to="/home">
         <Nav.Link >PINKCO</Nav.Link>
         </LinkContainer>
  
</Navbar.Brand> 
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">

  <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>


  <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
        
         {/* <LinkContainer to="/home">
         <Nav.Link >HOME</Nav.Link>
         </LinkContainer> */}
         <LinkContainer to="/products">
         <Nav.Link > All PRODUCTS</Nav.Link>
         </LinkContainer>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Menu/>
      </>



        
       
    )
}
