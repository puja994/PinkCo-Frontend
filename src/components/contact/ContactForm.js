import React from 'react'
import {Form, Button, Jumbotron} from 'react-bootstrap'
import './contactForm.style.css'

export const ContactForm = () => {
    return (
       <>
          <h1 style={{color: "#F19FDE"},{textAlign:"center"}}>Contact Us</h1>
          <Jumbotron fluid className="contact-form">
            <Form >

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your full name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" />
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>

  <Button type="submit">Submit</Button>
</Form>
</Jumbotron>
</>
       
    )
}
