import React, { useEffect, useState } from 'react';
import { Row,Col, Container } from 'react-bootstrap';
import { Form,Button } from 'react-bootstrap';
import Data from '../Data/Data';
import './Service.css';
const Serivce = () => {
        const [services,setServices] = useState([]);

      useEffect (()=>{

            fetch ('./output.JSON')
            .then(res=>res.json())
            .then(data => setServices(data));

      },[])
    return (
        <div>
            
            <div className="grid">
                
              {
                        services.map(service => 
                        <Data service ={service}>

                        </Data>
                        )
                   }
                   
                   </div>
            <div>
                <Container className="mt-5"> 
                <h1>Complete Health Care Solutions For Everyone</h1>
            <Row className="g-3">
            <Col md={6}>
            <Form className="formbg">
            <h2>Appointment</h2>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Password" required/>
            </Form.Group>
                
         </Row>
                <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Password" required/>
            </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Doctors</Form.Label>
                <Form.Control type="text" placeholder="Doctor Name" />
            </Form.Group>
                </Row >

                <Form.Group as={Col} controlId="formGridService">
                <Form.Label>Service</Form.Label>
                <Form.Control type="text" placeholder="Service you want"  required/>
            </Form.Group>

                <Row className="mb-4 mt-4">
                <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="Date" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" placeholder="Time" required/>
            </Form.Group>
                </Row>
                <Button variant="outline-dark">Book An Appointment</Button>
            </Form>

            </Col>

            <Col md={5}>
            <img src="https://images.pexels.com/photos/162583/work-workplace-office-computer-162583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="w-100 formimg" alt="" />
            </Col>
        </Row>
                
                </Container>
            </div>

        </div>
    );
};

export default Serivce;