import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Item = ({item}) => {
    return (
        <Card className="m-3">
        <Card.Img variant="top" src={item.img} alt={item.nombre} title={item.nombre} loading="lazy" />
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>$ {item.precio}</Card.Text>
            <Card.Text>{item.descripcion}</Card.Text>
            <Button variant="primary">Detalle</Button>
        </Card.Body>
        </Card>
    )
}

export default Item;