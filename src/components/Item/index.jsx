import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Item = ({item}) => {
    return (
        <Card className="m-3">
        <Card.Img variant="top" src={item.img} alt={item.nombre} title={item.nombre} loading="lazy" />
        <Card.Body className="row">
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Subtitle className="my-3">$ {item.precio}</Card.Subtitle>
            {/* <Card.Text>{item.descripcion}</Card.Text> */}
            <Button className="align-self-end">Detalle</Button>
        </Card.Body>
        </Card>
    )
}

export default Item;