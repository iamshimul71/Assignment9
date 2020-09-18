import React, { useState, useEffect, createContext } from 'react';
import Coxbazar from './Component/Cox/Coxbazar';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Sreemangal from './Component/sreemangal/Sreemangal';
import Sundarbans from './Component/Sundarbans/Sundarbans';
import Login from './Component/Login/Login';
import Hotel from './Component/Hotel/Hotel';
import Allhotel from './Component/Allhotel/Allhotel';
import Privateroute from './Component/PrivateRoute/Privateroute';

export const UserContext = createContext()

function App() {
  const [loogedInUser,setLoggedInUser] = useState({})
  return (
    
      <UserContext.Provider value={[loogedInUser,setLoggedInUser]}>
        <p> {loogedInUser.name}</p>
      <Router>
        <Switch>
       
           <Route path="/header">
               <Header></Header>
           </Route>
           
           <Route path="/coxbazar">
              <Coxbazar></Coxbazar>
           </Route>
           <Route path="/sreemangal">
              <Sreemangal></Sreemangal>
           </Route>
           <Route path="/sundarbans">
              <Sundarbans></Sundarbans>
           </Route>
           <Route path="/login">
              <Login></Login>
           </Route>
           <Privateroute path="/hotel">
               <Hotel></Hotel>
           </Privateroute>
         
           <Route path="/">
              <Header></Header>
          </Route>
        </Switch>
      </Router>
      
      </UserContext.Provider>
     
    
  );
}






export default App;
