import React from 'react'
// import "./Footer.css";
import { Navbar, Container } from 'react-bootstrap'
const Footer = () => {
    return (
        <div>
            <Navbar bg="info" data-bs-theme="dark" className='p-2'>
                <Container>
                    <Navbar.Brand href="#home">Generics</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer