import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'
import { useCartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
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
                    <Button as={Link} to={`/tienda`} variant='outline-primary' className='mx-3'>Seguir Comprando</Button>
                    <Button onClick={() => clearCart()} variant='outline-primary' className='mx-3'>Vaciar Carrito</Button>
                </>
            )}
        </div>
    )
}

export default Cart;