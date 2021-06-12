import React , {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../pages/products/productAction";
import { useHistory } from "react-router-dom"
import { Spinner, Image, Alert, Card, Button, Jumbotron} from "react-bootstrap";
import { Link } from "react-router-dom";
import './dispalypro.css'
import { Cart } from '../../pages/cart/Cart';

export const DisplayAllProducts = () => {
   
  const history = useHistory();

  const { isLoading, productList, status, message} = useSelector(
    (state) => state.product
  )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
    return (
      
        <div className="pro">
          hi
         {isLoading && <Spinner variant="primary" animation="border" />}
      {productList?.map((item, i) => {
        return (
          <div class="card" key={i}>

<Card style={{ width: '18rem' }} className="prodis">
  <Card.Img variant="top" src={item?.images[0]}  />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    {item.price} {""}
    {item.description} 
    </Card.Text>
    {/* <Cart.Text>{item.description} </Cart.Text> */}
    <Button variant="info" color="black">  <Link to={`/products/${item.slug}`}>View Product</Link></Button>
  </Card.Body>
</Card>

</div>
          
        );
      })}
      
        </div>
    )
}
