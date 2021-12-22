import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Item = ({item}) => {
    return (
        <Card className='m-3'>
        <Card.Img variant='top' src={item?.img} alt={item?.nombre} title={item?.nombre} loading='lazy' />
        <Card.Body className='row'>
            <Card.Title>{item?.nombre}</Card.Title>
            <Card.Subtitle className='my-3'>$ {item?.precio}</Card.Subtitle>
            <Link to={`/detalle/${item?.id}`}>
                <Button className='align-self-end'>Detalles</Button>
            </Link>
        </Card.Body>
        </Card>
    )
}

export default Item;