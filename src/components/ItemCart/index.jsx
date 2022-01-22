import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TrashWidget from '../TrashWidget'

const ItemCart = ( { productos, removeItem }) => {
    return (
        <Col id={productos.item.id} xs={12} className='d-flex align-items-center flex-column cartContainer mt-1 mb-2 '>
            <Row className='w-100 align-items-center'>
            <Col xs={1}>
                <button className='noFormatButton' onClick={() => removeItem(productos.item.id)}>
                <TrashWidget />
                </button>
            </Col>
            <Col xs={3}>
                <Link to={`/detalle/${productos.item?.id}`}>
                <img src={productos.item.img} className='cartThumbnail' alt={productos.item.nombre}></img>
                </Link>
            </Col>
            <Col xs={5} className='cartHeader'>
                {productos.item.nombre} x {productos.quantity}
            </Col>
            <Col className='cartPrice'>
                $ {productos.item.precio * productos.quantity}
            </Col>
            </Row>
        </Col>
    )
}

export default ItemCart;