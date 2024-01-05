import React from 'react';
import {Navbar,Nav, Container,Button} from "react-bootstrap";

const Layout = () => {
  return (
    <>
<Navbar style={{background:"black"}}>
      <Container style={{marginLeft:"40%"}} >
          <Nav
            className="my-2 me-auto my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>HOME</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>ABOUT</Nav.Link>
            <Nav.Link href="#"  style={{color:"white"}}>
              STORE
            </Nav.Link>
          </Nav>
         <Button>Cart</Button>
      </Container>
    </Navbar>
    <Navbar style={{background:"gray",padding:"1.5rem",marginTop:"1px", display: "flex", justifyContent: "center" }}>
      <h2 >Generics</h2>
    </Navbar>
    </>
  )
}

export default Layout