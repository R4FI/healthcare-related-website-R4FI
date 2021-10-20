import React from 'react';
import { Card,  Container } from 'react-bootstrap';

import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
const Data = (props) => {
    const {name,img,detail} = props.service;
    return (
        <div>
            
            <Container>
                  
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} className="w-25 m-auto"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {detail}
                    </Card.Text>
                    <Link to={"/detail"}>
                    <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
                </Card>
                
                </Container>    
               
        </div>
    );
};

export default Data;