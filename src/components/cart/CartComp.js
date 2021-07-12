import React, {useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Table, Image, Button, Row, Col, Container } from "react-bootstrap"
import {Link} from 'react-router-dom'
import {addProductToCart, deleteFromCart} from '../../pages/cart/CartAction'
import {CartTotal} from '../cart/CartTotal'
import './cart.css'

export const CartComp = () => {

    const dispatch = useDispatch()
    const {cartItemList} = useSelector((state)=> state.cart)

    const cartItemListLocalStorage = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[]

    useEffect(() => {
        !cartItemList && dispatch(addProductToCart(cartItemListLocalStorage))
    }, [cartItemList])

    const handleOnDelete = (item) =>{
        dispatch(deleteFromCart(item))
    }
    return (
        <div>
            {
                cartItemList.length? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Serial No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItemList.length && cartItemList.map((row,i)=>(
                                    <tr key={row._id}>
                                        <td>{i+1}</td>

                                        <td>
                                            <img
                                            src={row.images[0]}
                                            className="cartimg"
                                            />
                                        </td>
                                        <td>{row.name}</td>{" "}
                                        {/* <Link to={`/product/${row.slug}`}>
                                     
                                        
                                    </Link> */}
                                    <td>{row.price}</td>

                                    <td>
                                    <Button
                                    variant="warning"
                                    onClick={() => handleOnDelete(row)}
                                    >
                                    Remove Item
                                    </Button>
                                </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                        </Table>
                ): (
                    <>
                    <p>Cart empty!</p>
                       
                    <Link to="/home">
            <Button variant="success"  className="cartbtn">start shopping</Button>
          </Link>
          </>
          
                )
            }
            
        </div>
    )
}

