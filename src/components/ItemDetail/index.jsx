import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div className='container py-5'>
            {/*title*/}
            <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h1>{item.nombre}</h1>
                </div>
            </div>

            {/* end title*/}
            {/* product info*/}
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                    <img className='img-fluid' src={item.img} alt={item.nombre} title={item.nombre} loading='lazy' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h1>model : {item.nombre}</h1>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                        made by: <span className='text-uppercase'>{item.bodega}</span>
                    </h4>
                    <h4 className='text-blue'>
                        <strong>
                            price: <span>$</span>{item.precio}
                        </strong>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>some info about the product:</p>
                    <p className='text-muted lead'>{item.descripcion}</p>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;