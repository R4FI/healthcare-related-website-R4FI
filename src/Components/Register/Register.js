import { getAuth,createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
const Register = () => {
  const [email,setEmail] =useState ('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const auth = getAuth();
    //    email log in
   const handleEmailChange = e =>{
    setEmail(e.target.value);
}
const handlePasswordChange = e =>{
    setPassword(e.target.value);
}

 const handleRegsitration = e => {
  e.preventDefault();
     console.log(email,password);
     if(password.length<6){
       setError('Password must be 6 character.')
       return;
     }
     createUserWithEmailAndPassword(auth,email,password)
     .then(result=>{
         const usertwo =result.usertwo;
         console.log(usertwo);
     })
   
 }
  const {  signInUsingGoogle} = useFirebase();
  const handleReg=(e)=>{
       e.preventDefault();
  }
      return (
        <div>
          <h1>Please Register</h1>
            <Form onSubmit={handleReg} className="w-50 mx-auto mt-5 p-5">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={handleEmailChange } type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
    </Form.Group>

      <Button onClick={handleRegsitration} variant="primary" className="mt-3" type="submit">
        Sign Up
      </Button>
      <br />
    <Button onClick={signInUsingGoogle} variant="primary" className="mt-3" type="submit">
      Google SignUp 
      </Button> 
      <br />

      <div className="mb-3 text-danger"> {error}</div>
  
  
   <Link  className="reg" to="/login">Already Register? Log In</Link>
</Form>
        </div>
    );
};

export default Register;