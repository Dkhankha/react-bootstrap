import React from 'react'
// import "./Footer.css";
import { Navbar, Container } from 'react-bootstrap'
const Footer = () => {
    return (
        <div>
            <Navbar className='p-3 bg-info'>
                <Container>
                    <Navbar.Brand href="#home">Generics</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer