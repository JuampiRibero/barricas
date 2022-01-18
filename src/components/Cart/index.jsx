import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'
import { useCartContext } from '../../context/CartContext'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './styles.css';

const Cart = () => {

    const { cart, removeItem, clearCart, totalCart } = useCartContext();
    const total = totalCart();

    return (
        <div className="flex flex-col items-center min-h-screen h-full text-center py-12 space-y-4 mt-14">
            {cart.length > 0 ? (
                <>
                {cart.map((prod) => {
                return <ItemCart
                    key={prod.item.id}
                    productos={prod}
                    removeItem={removeItem}
                />
                })}
                </>
            ) : (
                <>
                <h2 className='deliFont'>¡El carrito está vacío!</h2>
                <Button as={Link} to={`/tienda`} variant='outline-primary' className='deliFont'>Empezá a comprar</Button>
                </>
            )}
            {cart.length > 0 && (
                <>
                <div className="flex justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4 px-2 lg:px-4 text-lg font-bold">
                    <p className='bgTotal cartTotal'>Total: $ {total}</p>
                </div>
                <Button as={Link} to={`/tienda`} variant='outline-primary' className='deliFont'>Seguir Comprando</Button>
                <Button onClick={() => clearCart()} variant='outline-primary' className='deliFont'>Vaciar Carrito</Button>
                </>
            )}
        </div>

        // <Container className='d-flex flex-column align-items-center mt-3'>
        //     {cart.length > 0 ?
        //         <React.Fragment>
        //         <Row className='w-100'>
        //             <Col xs={12} md={7}>
        //             <Col xs={12}>
        //                 <h2 className='deliFont cartHeader'>Items en el carrito</h2>
        //             </Col>
        //             {cart.map((prod) => {
        //                 return <ItemCart
        //                 key={prod.item.id}
        //                 productos={prod}
        //                 removeItem={removeItem}
        //                 />
        //             })}
        //             <Col xs={12} className='bgTotal cartTotal'>Total: $ {total}</Col>
        //             </Col>
        //             <Col>
        //             <button onClick={() => clearCart()}>Clear</button>
        //             </Col>
        //         </Row>
        //         </React.Fragment>
        //         :
        //         <Row className='mt-4 text-center'>
        //         <Col>
        //             <h2 className='deliFont'>¡El carrito está vacío!</h2>
        //             <Button as={Link} to={`/tienda`} variant='outline-primary' className='deliFont'>Empezá a comprar</Button>
        //         </Col>
        //         </Row>
        //     }
        // </Container>
    )
}

export default Cart