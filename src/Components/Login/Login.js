import React from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const registration = e =>{
    // console.log(email,password);
      e.preventDefault();
  }
  const auth = getAuth();
    return (
        <div>
            <Form className="w-50 mx-auto mt-5 p-5" onSubmit ={registration}>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

  <Button variant="primary" className="mt-3" type="submit">
    Submit
  </Button> <br />
   <Link className="reg" to="/register">New User? Register</Link>
</Form>
        </div>
    );
};

export default Login;