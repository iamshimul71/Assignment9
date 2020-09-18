import React, { useContext, useState } from 'react';
import {Carousel,Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row,Col,InputGroup } from 'react-bootstrap';
import logo from '../../Image/Logo.png'

import { Link, useHistory, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import fb from '../../Image/fb.png'
import google from '../../Image/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
  const [Newuser,setNewuser] = useState(false)
const [user,setUser] =useState({
  isSignin :false,
 
  name:'',
  email:'',
  password:'',
  error:'',
  success:false
})




  const [loogedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const  { from } = location.state || { from: { pathname: "/" } };
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
  
  const handlegoogleSignIn = ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
   
    firebase.auth().signInWithPopup(provider).then(function(result) {
     
      const {displayName,email} = result.user;
      const SignInUser = {name: displayName,email}
      setLoggedInUser(SignInUser)
      history.replace(from);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  const handleFbSignIn = ()=>{
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbprovider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  const handleBlur = (event)=>{
     let isFormValid = true;
      if(event.target.name==='email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
          
      }
      if(event.target.name==='password'){
             const passwordValid = event.target.value.length>6;
             isFormValid = passwordValid;
      }
      if( isFormValid){
         const newuserInfo = {...user};
         newuserInfo[event.target.name] = event.target.value;
         setUser(newuserInfo)
      }
  }
  const handlesubmit = (event)=>{
    if(Newuser && user.email && user.password)
    {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newuserInfo = {...user};
        newuserInfo.error = '';
        newuserInfo.success = true
         setUser(newuserInfo)
         UpdateUserInfo(user.name)
      })
      
      .catch(function(error) {
        const newuserInfo = {...user};
        newuserInfo.success = false
        newuserInfo.error = error.message
        setUser(newuserInfo)
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log(errorCode,errorMessage)
        // ...
      });
    }
    if(!Newuser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newuserInfo = {...user};
        newuserInfo.error = '';
        newuserInfo.success = true
         setUser(newuserInfo)
         console.log('sign in user ',res.user)

         const {displayName,email} = res.user
      const SignInUser = {name: displayName,email}
      setLoggedInUser(SignInUser)
      history.replace(from);
      })
      .catch(function(error) {
        // Handle Errors here.
        const newuserInfo = {...user};
        newuserInfo.success = false
        newuserInfo.error = error.message
        setUser(newuserInfo)
        // ...
      });
    }
    event.preventDefault()
  }

  const UpdateUserInfo = name =>{
    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
 
}).then(function() {
  // Update successful.
  console.log('update successful')
}).catch(function(error) {
  // An error happened.
  console.log(error)
});
  }
    return (
        <Container >
        <Navbar className="mb-5"  expand="lg">
 <Navbar.Brand href="#home" className="logo-sec" >
   <img src={logo} className="w-50"  alt=""/>
 </Navbar.Brand>
 <Form inline className="w-50 ">
     <FormControl type="text"  placeholder="Search Your Destination" className="mr-sm-2 form w-75 " />
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

<div style={{backgroundColor:'whitesmoke',padding:'20px',borderRadius:'5px'}} className="form-design my-5 w-50 m-auto">
    
                    <Form onSubmit={handlesubmit}>

                      <input type="checkbox" onChange={()=> setNewuser(!Newuser)} name="newuser"/>
                      <label>Newuser SignUP</label>
  <Form.Group controlId="formBasicEmail">
  
    <Form.Label>Create an Account</Form.Label>
   {Newuser &&  <Form.Control name="name" onBlur={handleBlur} type="text" placeholder="User name " required />}
    <Form.Control name="email" onBlur={handleBlur} type="email" placeholder="User name or Email" required />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control name="password" onBlur={handleBlur} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  
      <input type="submit" value={Newuser ? 'Sign Up' : 'Sign In'}/>
  
    <p style={{color:'red'}}>{user.error}</p>
    
      {user.success && <p style={{color:'green'}}>User {Newuser ? 'Created' : 'Loogedin'} successful</p>}
    
 
</Form>
     <h3 className="mt-3" style={{textAlign:'center'}}>Or</h3>
      <div onClick={handleFbSignIn} className="my-3" style={{border:'1px solid orange',padding:'10px',borderRadius:'30px'}}>
          <img className="mr-3" style={{width:'30px',float:'left'}} src={fb} alt=""/>
          <h6>Continue With facebook</h6>
      </div>

      <div onClick={handlegoogleSignIn} style={{border:'1px solid orange',padding:'10px',borderRadius:'30px'}}>
          <img className="mr-3" style={{width:'30px',float:'left'}} src={google} alt=""/>
          <h6>Continue With google</h6>
      </div>
        
    
</div>

</Container>
    );
};

export default Login;