import React from 'react';
import './Mainpage.css';
import { Carousel, Container, } from 'react-bootstrap';
import { CardGroup,Card,Button} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
const Mainpage = () => {
    return (
        <div>
                <Carousel className=""> 
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/8413291/pexels-photo-8413291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Second slide"
      src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Third slide"
      src="https://images.pexels.com/photos/4167539/pexels-photo-4167539.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                {/* second part */}
           <div className="container mt-3">
           <CardGroup>
  <Card  className="cardbg1">
    <Card.Img variant="top" src="https://cdn-icons.flaticon.com/png/512/67/premium/67804.png?token=exp=1634572628~hmac=2b0ee5dffb47e4fb20c356a5138c03fa" className="w-25 m-auto" />
    <Card.Body>
      <Card.Title>Emergency Ambulance</Card.Title>
      <Card.Text>
      An ambulance is a vehicle specially designed and equipped to allow the transport of sick,
      injured or pregnant woman about to give birth specialized care Ambulance.
      <h3>Call:00866922</h3>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="cardbg2">
    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/195/195941.png"  className="w-25 m-auto mt-3" />
    <Card.Body>
      <Card.Title>Doctor Appoinment</Card.Title>
      <Card.Text>
      Both doctor's appointment and doctor appointment are acceptable for describing a medical visit. In the first case the 's, 
      instead of showing possession, is actually showing association;
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="cardbg3">
    <Card.Img variant="top" src="https://cdn-icons.flaticon.com/png/512/1172/premium/1172079.png?token=exp=1634573007~hmac=e6e9af556f826299eb82b168bf4ab196"  className="w-25 m-auto mt-3"/>
    <Card.Body>
      <Card.Title>Doctor Timetable</Card.Title>
      <Card.Text>
      We have qualified and professional doctors available six days a week. Please view our timetable and contact us to make an
       appointment with your preferred doctor.We have schedule for our special Doctor.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
           </div>


           <div>
           <Container className="mt-3">
                <Row className="d-flex align-items-center justify-content-center"> 
                  <Col md={5}>
                  <img src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid" alt="" />
                  </Col>


                  <Col md={7}>
                  <p>Welcome To Best Medical & Health Care</p>
                   <h3>Get Best & Amazing Experice With Our Professional Doctors</h3>
                   <p>MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.</p>
           <ListGroup variant="flush">
              <ListGroup.Item>Proffessional Doctors</ListGroup.Item>
              <ListGroup.Item>Digital Laboratory</ListGroup.Item>
              <ListGroup.Item>Online Schedule</ListGroup.Item>
              <ListGroup.Item>Leading Technology</ListGroup.Item>
              <ListGroup.Item>24/7 Online Support</ListGroup.Item>
            </ListGroup>
                  </Col>
                  
                </Row>
               </Container> 
           </div>


           {/* services */}
           <div className="service mt-3">
             <div className="text-white">
             <h1>Services</h1>
             <h3>Here You Find Different Types Of Departments</h3>
             <p>MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy,
                Health And Any Related Medical Care Field.</p>
                </div>
            <Container >
                  <div>
                  <Row className="d-flex p-3">
                  <Col>
                   <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/8460084/pexels-photo-8460084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Card.Body>
                  <Card.Title>Cardiology</Card.Title>
                  <Card.Text>
                  Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or 
                  cardiovascular disease may be referred to a cardiologist.
                  </Card.Text>
                  <Button variant="primary">Detail</Button>
                </Card.Body>
              </Card>
                  </Col>


                  <Col>
                  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                  <Card.Title>Neurology</Card.Title>
                  <Card.Text>
                  Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.he nervous s
                  ystem is a complex.
                  
                  </Card.Text>
                  <Button variant="primary">Detail</Button>
                </Card.Body>
              </Card>
                  </Col>


                  <Col>
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://media.istockphoto.com/photos/blood-sample-picture-id1266993064?s=612x612" />
                      <Card.Body>
                        <Card.Title>Hematology</Card.Title>
                        <Card.Text>
                        Hematology is the science or study of blood, blood-forming organs and blood diseases. In the medical field, 
                        hematology includes the treatment of blood disorders.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://images.pexels.com/photos/7089617/pexels-photo-7089617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                      <Card.Body>
                        <Card.Title>Radiology</Card.Title>
                        <Card.Text>
                        Radiology is a branch of medicine that uses imaging technology to diagnose and treat disease. Radiology may be 
                        divided into two different areas, diagnostic radiology 
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                      </Card.Body>
                    </Card>
                  </Col>
           </Row>
                  </div>
            </Container>
           </div>

        {/* Doctors */}

              <div>
               
                <Container className="mt-5 border-3"> 
                <div>
                <Row>
                      <Col md={6}>
                      <h3>Meet Our Team</h3> 
                      <h2>Group Of Certified & Experienced Doctors</h2> 
                      </Col>


                      <Col md={5}>
                      Medico Doctors Are A Medical And Health Department Provider Institutions. 
                      Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field.
                      </Col>
               </Row>
               <hr />
                 </div>
              <Row className="d-flex g-3  mt-5">
                  <Col md={4}>
                  <img src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid" alt="" />
                  <h3>Dr. Daphne Leppanen</h3>
                  <p>Emergency Physician</p>
                  </Col>


                  <Col md={4}>
                   <img src="https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid" alt="" />
                    <h3>Dr. Alexia Crivaro</h3>
                    <p>Eye Specialist</p>
                  </Col>


                  <Col md={4}>
                    <img src="https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid" alt="" />
                    <h3>Dr. Harmony Flenory</h3>
                    <p>Internist, Orthopedic Surgeon</p>
                  </Col>
              </Row>
              </Container> 
              </div>

        

        </div>
    );
};

export default Mainpage;