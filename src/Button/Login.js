import {React, useState} from 'react';
// import {Button, Modal, Form} from 'react-bootstrap'
// import { useHistory } from "react-router-dom";
// import { Redirect,useLocation} from "react-router-dom"
const ServerURL = "http://localhost:3000";

const handleRouteLogin = () => { 
  window.location.href= `${ServerURL}/login`;
}
const handleRouteLogout = () => { 
  window.location.href= `${ServerURL}/logout`;
}
const Login = (isAuth) =>{

    if(!isAuth.isLoggedIn.isAuth){
    return (
      <>
        <button type="button" className="btn btn-primary mr-4" onClick={handleRouteLogin}>Login</button> 
      </>
    );
  }else {
    return (
      <>
        <button type="button" className="btn btn-primary mr-4 color:red" onClick={handleRouteLogout}>Logout</button> 
      </>
    );
  }
}
          
          
    export default Login;
    
