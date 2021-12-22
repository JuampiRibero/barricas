import React from 'react';
import './styles.css';

const ItemDetail = ({item}) => {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <img className='img-detail img-fluid' src={item?.img} alt={item?.nombre} title={item?.nombre} loading='lazy' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h1>Nombre: {item?.nombre}</h1>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                        Bodega: <span className='text-uppercase'>{item?.bodega}</span>
                    </h4>
                    <h4 className='text-blue'>
                        <strong>Precio: ${item?.precio}</strong>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>Información sobre el producto:</p>
                    <p className='text-muted lead'>{item?.descripcion}</p>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;