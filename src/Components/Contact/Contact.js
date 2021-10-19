import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Contact.css';
import { Col,Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        <div>
            <Container>
            <Row className="d-flex mt-5 g-3">
                <Col md={4}>
              <Card  className="contact" border="dark" style={{ width: '20rem' }}>
                <img src="https://cdn-icons.flaticon.com/png/512/4286/premium/4286008.png?token=exp=1634589215~hmac=39492a720ad5aee10a15894371819964" className="w-25 m-auto p-3" alt="" />
                <Card.Body>
                        <Card.Text>
                            <h3>Call:+1-202-555-0174</h3>
                            <h3>Call:+1-202-555-0185</h3>
                        </Card.Text>
                        </Card.Body>
                 </Card> 
                </Col>


                <Col  md={4}>
                <Card className="contact" border="dark" style={{ width: '20rem' }}>
               <img className="w-25 m-auto p-3" src="https://cdn-icons-png.flaticon.com/512/725/725643.png" alt="" />
                <Card.Body>
                        <Card.Text>
                            <h3>medico@yahoo.com</h3>
                            <h3>support@gmail.com</h3>
                        </Card.Text>
                        </Card.Body>
                 </Card> 
                </Col>

                <Col  md={4} >
                <Card className="contact" border="dark" style={{ width: '20rem' }}>
                <img className="w-25 m-auto p-3" src="https://cdn-icons.flaticon.com/png/512/1865/premium/1865083.png?token=exp=1634589307~hmac=2753a78de31b72b0a697dc395cd9d185" alt="" />
                <Card.Body>
                    
                        <Card.Text>
                            <h3>3367 Briarhill Lane</h3>
                            <h3>Akron,Maine</h3>
                        </Card.Text>
                        </Card.Body>
                 </Card> 
                </Col>
            </Row>
            <hr className="mt-5"/>
            </Container>
        </div>
        

             {/* Location */}

                <div>
                   <Container className="location">
                   <Row>
                    <Col md={5}>

                    <img className="img-fluid" src="https://rooftop-paris-wagram360.com/wp-content/uploads/2017/04/google-map.png" alt="" />
                    
                    </Col>

                    <Col md={6}>
                    <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMessAGE">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5}  placeholder="Your Message"/>
                </Form.Group>
                <Button variant="outline-dark">Dark</Button>
                </Form>
            </Col>
                </Row>   
                    </Container>     
                </div>
         
        </div>
    );
};

export default Contact;