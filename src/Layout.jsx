import React from 'react';
import {Navbar,Nav, Container,Button} from "react-bootstrap";
import "./Layout.css";
const Layout = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Button variant="info" className='cart'>Cart</Button>{' '}
  </Navbar>
  <Navbar className='header justify-content-center'> 
        <Container>
          <Navbar.Brand className='rr'>Generics</Navbar.Brand> 
        </Container>
      </Navbar>
    </>
  )
}

export default Layout