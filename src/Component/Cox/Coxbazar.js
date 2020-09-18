import React from 'react';
import {Carousel,Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,CardDeck,Card ,Row,Col } from 'react-bootstrap';
import logo from '../../Image/Logo.png'

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import './Coxbazar.css'




const Coxbazar = () => {
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
                 <h1 className="text-white display-2">Cox's Bazar</h1>
                 <p className="text-white">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

  

   

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

 
          
   

export default Coxbazar;