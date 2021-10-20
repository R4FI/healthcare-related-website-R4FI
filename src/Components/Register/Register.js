import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
const Register = () => {
  const {signInUsingGoogle} = useFirebase();
  const handleReg=(e)=>{
       e.preventDefault();
  }
      return (
        <div>
          <h1>Please Register</h1>
            <Form onSubmit={handleReg} className="w-50 mx-auto mt-5 p-5">
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
      </Button>
      <br />
    <Button onClick={signInUsingGoogle} variant="primary" className="mt-3" type="submit">
      Google SignUp 
      </Button> 
      <br />
  
  
   <Link  className="reg" to="/login">Already Register? Log In</Link>
</Form>
        </div>
    );
};

export default Register;