import React from 'react';
import './About.css';
import {Button,Row,Col, Container, Form, FormControl } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div>
            <Container>
        <Row className="d-flex mt-5">
          
          <Col md={5}>

            <img src="https://images.pexels.com/photos/6129106/pexels-photo-6129106.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="w-75" alt="" />
          </Col>


          <Col md={7}>
          
          <h5 className="text-info">Dedicated To Hope, Healing, And Recovery.</h5>
          <h2>Quality Helthcare Starts With Quality Doctors</h2>
          <p>MeDICO Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, 
            Pharmacy, Health And Any Related Medical Care Field.Medical Encyclopedia includes articles about diseases, tests, symptoms, injuries, and surgeries. 
            Search encyclopedia articles</p>
            <Button variant="outline-dark">Discover About More</Button>
          </Col>
         
      </Row>
      </Container>
            </div>

            {/* second part */}
            <div className="about-bg">
              <Container className="mt-5  p-4">
              <Row className="d-flex"> 
                <Col md={6}>
                  <h5>We Offer</h5>
                <h1>Fast & Relaible</h1>
                <h4>Medical & HealthCare Solutions to Our Patients</h4>
                <p>
                Pellentesque vitae ultrice posuere. Praesent justo laoret dignis ectus etiam ipsum habitant tristique nam est. Donec venentse euvarius cursus massa metus adipiscing ante. Nulla aculis. Donec lorem metus lobortis eu laci nid nec ipsum 
                dignissim sed duil vamas.
                </p>
                </Col>


                <Col md={6}>
                <img src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="w-75" alt="" />
                </Col>
            </Row>
              </Container>
            </div>


            {/* last part */}

            <div className="mt-5 bg-dark text-white p-5">
            <Row className="d-flex">
              <Col md={6}>
                <h2>Subscribe To Our Newslatter</h2>
              </Col>

              <Col md={3}>
              <Form>
                  <FormControl type="Email" placeholder="Email" />
                  <Button type="submit" className="mt-2" variant="outline-warning">Subscribe</Button>
              </Form>
              </Col>
        </Row>
            </div>
        </div>
    );
};

export default About;