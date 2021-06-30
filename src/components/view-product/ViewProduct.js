
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGivenSlugProduct } from "../../pages/products/productAction";
import { Image, Spinner, Button } from "react-bootstrap";
import {addProductToCart} from '../../pages/cart/CartAction'
import './viewproduct.css'

export const ViewProduct = () => {
  const dispatch = useDispatch()

  const { selectedProductBySlugList, isLoading } = useSelector(
    (state) => state.product
  );


  let { slug } = useParams();
  useEffect(() => {
    dispatch(fetchGivenSlugProduct(slug));
  }, [slug])

  const handleOnClick = (item,qty)=>{
      dispatch(addProductToCart(item,qty))
  }


  return (
    <div className="cardwrapper">
      
      
      {isLoading && <Spinner variant="primary" animation="border" />}
      {selectedProductBySlugList?.map((item, i) => {
        return (
          <div>
            <div class="card" key={i}>
              <Image
                className=""
                src={item?.images[0]}
                alt="Products"
                style={{ width: "50%", height:"30%"}}
              />
               
                <h1>{item.name}</h1>
               <h2> {item.price}</h2> 
                <h6>{item.description}</h6>
                <input 
                name="qty"
                type="form"
                width= "30px"
                />
                <Button 
                width="50px"
                onClick={()=> handleOnClick(item,qty)}
                >Add To Cart</Button>
             

           
          </div>
            </div>
           
        );
      })}
    </div>
  );
};


