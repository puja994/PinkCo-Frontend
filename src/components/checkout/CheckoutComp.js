

import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import {Col, Row, Form, Button, Container} from 'react-bootstrap'
import './checkout.css'

const product={
    cart: [{
        name: "milk",
        qty: 5,
        price: 10
    },
    {
        name: "apple",
        qty: 5,
        price: 10
    },
],
total: 20*100,
}

export const CheckoutComp =  () => {
    const handleOnPayment = async token=>{
        
        const data = {
            token,
            product
        }

        const result =  await axios.post("http://localhost:8001/api/v1/payment", 
        data,
        {
           headers: {
               "content-Type": "application/json"
           }
       }
     )
       
    }
    // const total = 10 *100 //price in cents
    return (
        <>

     <Container>
         <h2 style={{marginTop: "50px"}, {textAlign: "center"}}>Please fill your shipping address</h2>
     <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>NSW</option>
                <option>VIC</option>
                <option>WA</option>
                <option>NT</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>


          <Button variant="primary" type="submit">
            Save details
          </Button>
        
        </Form>


<StripeCheckout
            token={handleOnPayment}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            name="pay by card"
            amount={product.total}
            
            >
                <Button  className="paybtn"> Pay Now</Button>
                </StripeCheckout>

     </Container>

       
            
         
       
        </>
    )
}
