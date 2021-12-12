import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Logo from '../../logo.png';
import Link from '../Link';
import './styles.css';

const NavBar = () => {
    return (
        <Navbar className="nav-bg" expand="lg">
            <Container>
                <Navbar.Brand>
                    <a href="/"> 
                        <img src={Logo} alt="Logo Barricas" title="Logo Barricas" className="nav-logo" loading="lazy" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
                        <Link />                  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;