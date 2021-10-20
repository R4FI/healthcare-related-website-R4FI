import React from 'react';
import './Home.css';
import { Navbar,Container,Nav,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
const Home = () => {
  const {user ,logOut} = useFirebase();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to={"/home"}>Medico
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        <Nav.Link as={Link} to={"/service"}>Service</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About US</Nav.Link>
       
        <Button as={Link} to={"/login"} variant="outline-info">Log In</Button>
        {user?.email &&
     <Button onClick={logOut} variant="outline-info">LogOut </Button> }
       <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Home;