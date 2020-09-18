import React from 'react';
import {Carousel,Navbar,Nav,NavDropdown,Form,FormControl,Button, Container,CardDeck,Card  } from 'react-bootstrap';
import logo from '../../Image/Logo.png'
import header1 from '../../Image/header1.png'
import header2 from '../../Image/header2.png'
import header3 from '../../Image/header3.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
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
    
    <Nav.Link href="/header">News</Nav.Link>
      <Nav.Link href="#link">Destination</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <Nav.Link href="#link" style={{backgroundColor:'orange',borderRadius:'5px',color:'black'}}>Login</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
               
               <div className="row">
                 <div className="col-md-4">
                 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>cox bazar</h2>
      <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
      <Button variant="warning">Booking +</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={header2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Sreemangal</h2>
      <p>Sreemangal is an Upazila of Moulvibazar District in the Sylhet Division of Bangladesh.</p>
      <Button variant="warning">Booking +</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={header3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Sundarbans</h2>
      <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. </p>
      <Button variant="warning">Booking +</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
                 </div>
                 <div className="col-md-8">
                 <CardDeck style={{border:'1px solid orange',padding:'20px',borderRadius:'5px'}}>
                 <Link style={{textDecoration:'none'}} to="/coxbazar">
                 <Card  style={{border:'3px solid orange',padding:'20px',borderRadius:'5px'}} className="card1">
                     <h3 style={{color:"white"}}>Cox bazar</h3>
                      </Card>
                 </Link>
                      
                    
                   
                 
                 <Link style={{textDecoration:'none'}} to="/sreemangal">
                 <Card style={{border:'3px solid orange',padding:'20px',borderRadius:'5px'}} className="card2">
   <h3 style={{color:"white"}}>sreemangal</h3>
    
  </Card>
                 </Link>


                 <Link style={{textDecoration:'none'}} to="/sundarbans">
                 <Card style={{border:'3px solid orange',padding:'20px',borderRadius:'5px'}} className="card3">
    
    <h3 style={{color:"white"}}>Sundarbans</h3>
      
    </Card>
                 </Link>
 
  
</CardDeck>

                 </div>
               </div>
             
         </Container>
           
     </div>
 
    );
};

export default Header;