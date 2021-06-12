import React from 'react'
import { Home } from '../../../pages/home/Home'
import { NavCategories } from '../../nav-categories/NavCategories';
import '../defaultLayout.style.css'
import { LinkContainer } from "react-router-bootstrap"
import {Nav, FormControl} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import {logOut} from '../../../pages/login/loginAction'



export const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { adminProfile } = useSelector(state => state.profile);
  
    const handleOnLogout = () => {
      console.log("logging out./..")
      dispatch(logOut(adminProfile?._id));
      history.push("/login");
    }
    return (
        <>
        
        <div className="top-links">
        <LinkContainer to="/cart">
         <Nav.Link > <i className="fas fa-cart-plus "></i></Nav.Link>
         </LinkContainer>
         <LinkContainer to="/login">
         <Nav.Link >LOGIN</Nav.Link>
         </LinkContainer>
         <LinkContainer to="/signup">
         <Nav.Link >SIGNUP</Nav.Link>
         </LinkContainer>
         <LinkContainer to="/login">
         <Nav.Link onClick={handleOnLogout} style={{ cursor: "pointer" }}>LOGOUT</Nav.Link>
         </LinkContainer>
         

         <br></br> 
               
        </div>
          <NavCategories/>
          </>
        
        
    )
}

