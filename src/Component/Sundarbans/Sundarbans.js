import React from 'react';
import {Carousel,Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,CardDeck,Card,Row,Col  } from 'react-bootstrap';
import logo from '../../Image/Logo.png'

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


const Sundarbans = () => {
    return (
        <div className="bk-img">
        <Container >
        <Navbar variant="dark"  expand="lg">
 <Navbar.Brand href="#home" className="logo-sec" >
   <img src={logo}  className="logo" alt=""/>
 </Navbar.Brand>
 <Form inline className="w-50 text-white">
     <FormControl type="text" variant="dark" placeholder="Search Your Destination" className="mr-sm-2 form w-75 text-white" />
     <Button variant="outline-success">Search</Button>
   </Form>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="mr-auto">
   <Link className="my-2" to="/header">
       Home
    </Link>
     <Nav.Link href="#home">News</Nav.Link>
     <Nav.Link href="#link">Destination</Nav.Link>
     <Nav.Link href="#link">Blog</Nav.Link>
     <Nav.Link href="#link">Contact</Nav.Link>
     <Nav.Link href="#link" style={{backgroundColor:'orange',borderRadius:'5px',color:'black'}}>Login</Nav.Link>
    
   </Nav>
  
 </Navbar.Collapse>
</Navbar>
              
              <div className="row">
                <div className="col-md-6">
                 <h1 className="text-white display-2">Sundarbans</h1>
                 <p className="text-white">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p>

  

   

                </div>
                <div className="col-md-6">
                    <div style={{backgroundColor:'whitesmoke',padding:'20px',borderRadius:'5px'}} className="form-design my-5">
                    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Origin</Form.Label>
    <Form.Control type="text" placeholder="Dhaka" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Destination</Form.Label>
    <Form.Control type="text" placeholder="Cox Bazar" />
  </Form.Group>
      

  <Row className="mb-3">
    <Col>
    <Form.Label>Form</Form.Label>
      <Form.Control type="date" />
    </Col>
    <Col>
    <Form.Label>To</Form.Label>
      <Form.Control type="date"/>
    </Col>
  </Row>


  <Link to="/hotel">
  <Button className="btn-lg form-control" variant="warning" type="submit">
    Start Booking
  </Button>
  </Link>
</Form>
                    </div>
                     
                   
                </div>
              </div>
            
        </Container>
          
    </div>
    );
};

export default Sundarbans;