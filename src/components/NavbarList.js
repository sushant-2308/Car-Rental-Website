import {React} from "react";
import { Navbar, Nav} from 'react-bootstrap';
import image1 from './../Images/WHEELZDRIVE-logos_white.png';
import { Link } from 'react-router-dom';
import Login from '../Button/Login';

const NavbarList = (isAuth) => {
    return (
     <div>
     
      <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
 
  <img
  height = '50px'
  width = '300px'
    src={image1}
    alt='Car_logo'
    />
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar me-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/cars">Cars</Link>
      <Link className="nav-link" to="/services">Services</Link>
      <Link className="nav-link" to="/contact">Contact Us</Link>
    </Nav>
    <Nav>
    <Login isLoggedIn={isAuth}/>
    {/* <Registration /> */}
   </Nav>
  </Navbar.Collapse>
</Navbar>

</div>
);
}

export default NavbarList;