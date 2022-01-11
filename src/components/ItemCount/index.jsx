import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(parseInt(initial));
    const [changeBtn, setChangeBtn] = useState(true);

    const addQuantity = () => {
        quantity < stock ? setQuantity(quantity + 1) : alert('Alcanzaste el máximo de stock disponible.');
    };

    const reduceQuantity = () => {
        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    };

    const addToCart = () => {
        onAdd(quantity);
        setChangeBtn(false);
    };

    return (
        <div>
            <div className='my-3'>
                <Button variant="info" size="sm" onClick={reduceQuantity}>-</Button>
                <Button variant="outline-info" size="sm" disabled className='mx-1'>{quantity}</Button>
                <Button variant="info" size="sm" onClick={addQuantity}>+</Button><br/>
                { changeBtn ?
                <Button variant="info" size="sm" onClick = {addToCart}>Agregar al Carrito</Button>
                :
                <div>
                    <Button variant="info" size="sm" onClick = {addToCart}>Agregar al Carrito</Button><br/>
                    <Link to= "/tienda">
                        <Button variant="info" size="sm">Seguir Comprando</Button><br/>
                    </Link>
                    <Link to= "/carrito">
                        <Button variant="info" size="sm">Terminar Compra</Button>
                    </Link>
                </div>
                }
            </div>
        </div>
        
    )
}

export default ItemCount;