import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(parseInt(initial));
    const [changeBtn, setChangeBtn] = useState(true);


    const addCount = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            alert('Alcanzaste el máximo stock disponible.');
        };
    };

    const reduceCount = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        };
    };

    const addToCart = () => {
        if(quantity <= stock) {
            onAdd(quantity);
            setChangeBtn(false);
        };
    };

    return (
        <div>
            <div className='my-3'>
                <Button variant="info" size="sm" onClick={reduceCount}>-</Button>
                <Button variant="outline-info" size="sm" disabled className='mx-1'>{quantity}</Button>
                <Button variant="info" size="sm" onClick={addCount}>+</Button><br/>
                { changeBtn ?

                <Button variant="info" size="sm" onClick = {addToCart}>Agregar al Carrito</Button>
                :
                <div>
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