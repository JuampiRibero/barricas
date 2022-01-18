import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'
import { useCartContext } from '../../context/CartContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './styles.css';

const Cart = () => {

    const { cart, removeItem } = useCartContext();

    return (
        <Container className='d-flex flex-column align-items-center mt-3'>
            {cart.length > 0 ?
                <React.Fragment>
                <Row className='w-100'>
                    <Col xs={12} md={7}>
                    <Col xs={12}>
                        <h2 className='deliFont cartHeader'>Items en el carrito</h2>
                    </Col>
                    {cart.map((prod) => {
                        return <ItemCart
                        key={prod.item.id}
                        productos={prod}
                        removeItem={removeItem}
                        />
                    })}
                    {/* <Col xs={12} className='bgTotal cartTotal'>Total: $ {cartTotal}</Col> */}
                    </Col>
                </Row>
                </React.Fragment>
                :
                <Row className='mt-4 text-center'>
                <Col>
                    <h2 className='deliFont'>¡El carrito está vacío!</h2>
                    <Button as={Link} to={`/tienda`} variant='outline-primary' className='deliFont'>Empezá a comprar</Button>
                </Col>
                </Row>
            }
        </Container>
    )
}

export default Cart