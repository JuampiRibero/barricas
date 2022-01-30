import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../logo.png';
import './styles.css';

const Footer = () => {
    return (
    <Container fluid className='footer'>
        <Row className='text-center py-4 pl-md-3 pr-md-3'>
            <Col xs={12} className='footer-main-text'>
                <Link to='/'> 
                    <img src={Logo} alt='Logo Barricas' title='Logo Barricas' loading='lazy' className='mx-3' height={75} width={75}/>
                </Link>
                Barricas
            </Col>
            <Col xs={12} className='mt-4 divider'></Col>
            <Col xs={12} className='mt-4'>2021 © Barricas. Todos los derechos reservados.</Col>
        </Row>
    </Container>
)};

export default Footer;