import React, { useState } from "react";
import { Form, Button, Col, Jumbotron, Alert, Spinner, Row} from "react-bootstrap";
import { signupAction } from "../../pages/signup/signupAction";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess } from "../../pages/signup/signupSlice";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  // address: "",
};

export const SignupForm = () => {
  const [Signup, setSignup] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, signupresponse } = useSelector(
    (state) => state.signup
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...Signup, [name]: value });
    
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(signupAction(Signup))
  };
  return (
    <Jumbotron className="container">
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {signupresponse?.message && (
        <Alert
          variant={
            signupresponse.status === "success" ? "success" : "danger"
          }
        >
          {signupresponse.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail"> 
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={Signup.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
              value={Signup.password}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="Enter your First Name"
              onChange={handleOnChange}
              type="text"
              name="fName"
              value={Signup.fName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>

            <Form.Control
              placeholder="Enter your Last Name"
              onChange={handleOnChange}
              type="text"
              name="lName"
              value={Signup.lName}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};


