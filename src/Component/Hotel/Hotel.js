import React from 'react';
import {Carousel,Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,CardDeck,Card ,Row,Col,CardGroup } from 'react-bootstrap';
import logo from '../../Image/Logo.png'
import pic1 from '../../Image/pic1.jpg'
import pic2 from '../../Image/pic2.jpg'
import pic3 from '../../Image/pic3.jpg'

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react';
import fakeData from '../../fakeData'
import Allhotel from '../Allhotel/Allhotel';


const Hotel = (props) => {
  const first5 = fakeData.slice(0,4)
    let [hotel,setHotel] = useState(first5);
    return (
        <Container >
        <Navbar   expand="lg">
 <Navbar.Brand href="#home" className="logo-sec" >
   <img src={logo}  className="w-50" alt=""/>
 </Navbar.Brand>
 
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


<CardGroup className="w=50">
  <Card className="w=50">
    <Card.Img className="w=50" variant="top" src={pic1} />
    <Card.Body>
      <Card.Title>Hotel The Cox Today</Card.Title>
      <Card.Text>
      Cox's Bazar is a district in the Chittagong Division of Bangladesh. It is named after Cox's Bazar town. It is located 150 kilometres south
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={pic2} />
    <Card.Body>
      <Card.Title>Hotel The see hill</Card.Title>
      <Card.Text>
      Cox's Bazar is a district in the Chittagong Division of Bangladesh. It is named after Cox's Bazar town. It is located 150 kilometres south{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={pic3} />
    <Card.Body>
      <Card.Title>hotel tuilip</Card.Title>
      <Card.Text>
      Cox's Bazar is a district in the Chittagong Division of Bangladesh. It is named after Cox's Bazar town. It is located 150 kilometres south
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
</CardGroup>


</Container>
    );
};

export default Hotel;