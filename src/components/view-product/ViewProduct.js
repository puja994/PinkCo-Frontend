
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGivenSlugProduct } from "../../pages/products/productAction";
import { Image, Spinner, Button } from "react-bootstrap";
import {addProductToCart} from '../../pages/cart/CartAction'
import './viewproduct.css'

export const ViewProduct = () => {
  const dispatch = useDispatch()
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const { selectedProductBySlugList, isLoading } = useSelector(
    (state) => state.product
  );


  let { slug } = useParams();
  useEffect(() => {
    dispatch(fetchGivenSlugProduct(slug));
  }, [slug])

  const handleOnClick = (itemsList,selectedQuantity)=>{
      dispatch(addProductToCart(itemsList,selectedQuantity))
  }


  return (
    <div className="cardwrapper">
      
      
      {isLoading && <Spinner variant="primary" animation="border" />}
      {selectedProductBySlugList?.map((item, i) => {
        return (
          <div>
            <div className="cardwrap" key={i}>
              <div className="side">
              <Image
                className=""
                src={item?.images[0]}
                alt="Products"
                style={{ width: "30%", height:"30%"}}
              />
              </div>
               
               <div className="details">
                <h1>{item.name}</h1>
               <h2> {item.price}</h2> 
                <h6><span style={{fontWeight: "bold"}}>Details: </span> {item.description}</h6>
                <span style={{fontWeight: "bold"}}>Quantity:</span> <input 
                name="qty"
                type="form"
                width= "30px"
                className="inputfield"
                />
                <Button className="btn"
                width="50px"
                onClick={()=> handleOnClick(item,selectedQuantity)}
                >Add To Cart</Button>
             </div>

           
          </div>
            </div>
           
        );
      })}
    </div>
  );
};


