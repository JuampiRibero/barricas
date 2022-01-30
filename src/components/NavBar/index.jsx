import React from 'react';
import { Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../logo.png';
import ItemLink from '../Link';
import { ItemLinkBodega } from '../Link';
import './styles.css';

const NavBar = () => {
    return (
        <Navbar className='nav-bg' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'> 
                        <img src={Logo} alt='Logo Barricas' title='Logo Barricas' className='nav-logo' loading='lazy' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavDropdown title='BODEGA' id='basic-nav-dropdown'>
                            <ItemLinkBodega />
                        </NavDropdown>
                        <ItemLink />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;