import Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import logo from '../../logo.png';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css';

import React from 'react';

const NavBar = () => {
    return (
        <Navbar className="bg-color" expand="lg">
            <Container>
                <Navbar.Brand>
                    <a href="#!"> 
                        <img src={logo} alt="Logo Barricas" title="Logo Barricas" className="navbar-logo" loading="lazy" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Nav.Link href="#!">INICIO</Nav.Link>
                        <Nav.Link href="#!">SOBRE NOSOTROS</Nav.Link>
                        <Nav.Link href="#!">SERVICIOS</Nav.Link>
                        <Nav.Link href="#!">TIENDA</Nav.Link>
                        <Nav.Link href="#!">CONTACTO</Nav.Link>
                        <Nav.Link href="#!">
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;