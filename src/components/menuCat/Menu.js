import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../pages/category/categoryAction";
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";
import './menu.css'


export const Menu = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const { categoryList } = useSelector((state) => state.category);
    return (

        <div className="menu">
             {categoryList?.map((item, i) => {
        return (
          <div key={i}>
            
          

<Navbar collapseOnSelect  variant="dark" expand="md" className="color-nav">

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">

 
              <Nav.Link> <Link to={`/category/${item.slug}/${item._id}`}>{item?.name}</Link> </Nav.Link>
             


 
         </Nav>
        </Navbar.Collapse>
      </Navbar>

          </div>
        );
      })}
        </div>
    )


}
