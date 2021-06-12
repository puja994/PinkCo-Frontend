import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from '../../components/layout/DefaultLayout'
import { fetchSelectedProducts } from "../../pages/products/productAction";
import { Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom" 
import './catCard.css'

export const ProductDisplay = () => {
    const dispatch = useDispatch()
  let {  _id } = useParams()
  const { isLoading, selectedProductList} = useSelector(
    (state) => state.product
  )
  useEffect(() => {
    dispatch(fetchSelectedProducts(_id))}, [_id])

    return (
      
        <DefaultLayout>
          hi from 2
          <div className="catCard">
       {isLoading && <Spinner variant="primary" animation="border" />}
          {selectedProductList?.map((item, i) => {
            return (
              <div  key={i}>
                <Image
                  className=""
                  src={item?.images[0]}
                  style={{ width: "30%" }}
                />
                <p>{item.name}</p>
                <p >{item.price}</p>
                <p>{item.description}</p>
                <p>
                  <Link to={`/products/${item.slug}`}>View Product</Link>
                </p>
              </div>
            );
          })}
          </div>
        </DefaultLayout>
    )
}
