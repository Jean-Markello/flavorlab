import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../Images/Logo.png';
import {Link} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" >
        <Container>
          <Navbar.Brand ><Link to ='/' style={{color: 'rgba(212, 109, 7, 0.885)'}}>Home</Link></Navbar.Brand>
          <Navbar.Brand ><Link to ='/services' style={{color: 'rgba(212, 109, 7, 0.885)'}}> Services</Link></Navbar.Brand>
          <Navbar.Brand ><Link to ='/about' style={{color: 'rgba(212, 109, 7, 0.885)'}}> About</Link></Navbar.Brand>
          <Navbar.Brand className="logo"><img width="110" src={logo}></img></Navbar.Brand>
          <Navbar.Brand><Link to ='/instructors' style={{color: 'rgba(212, 109, 7, 0.885)'}}> Instructors</Link></Navbar.Brand>
          <Navbar.Brand><Link to ='/meals' style={{color: 'rgba(212, 109, 7, 0.885)'}}> Meals</Link></Navbar.Brand>
          <Navbar.Brand ><Link to ='/booking' style={{color: 'rgba(212, 109, 7, 0.885)'}}> Booking</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>  
  );
};

export default Navbar2;
