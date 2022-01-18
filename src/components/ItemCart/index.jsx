import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TrashWidget from '../TrashWidget'

const ItemCart = ( { productos, removeItem }) => {
    return (
        <Col id={productos.item?.id} xs={12} className='d-flex align-items-center flex-column cartContainer mt-1 mb-2 '>
            <Row className='w-100 align-items-center'>
            <Col xs={1}>
                <button className='noFormatButton' onClick={() => removeItem(productos.item?.id)}>
                <TrashWidget />
                </button>
            </Col>
            <Col xs={3}>
                <Link to={`/detalle/${productos.item?.id}`}>
                <img src={productos.item?.img} className='cartThumbnail' alt={productos.item?.nombre}></img>
                </Link>
            </Col>
            <Col xs={5} className='cartHeader'>
                {productos.item?.nombre} x {productos.quantity}
            </Col>
            <Col className='cartPrice'>
                $ {productos.item?.precio * productos.quantity}
            </Col>
            </Row>
        </Col>

        // <div className="flex flex-col justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4">
        //     <div className="ml-2 flex flex-col lg:flex-row items-center">
        //         <img src={productos.item?.img} placeholder="blurred" alt="item" width={50} height={50} className=" h-12 w-14 shadow-md rounded-md"/>
        //         <div className="flex flex-col items-center lg:items-start justify-center px-4 w-full">
        //             <h2 className="font-bold text-xl whitespace-nowrap">{productos.item?.nombre}</h2>
        //             <p className="tracking-normal ">${productos.item?.precio}</p>
        //         </div>
        //         <div className="rounded-sm h-12 w-24 mx-2 flex items-center justify-center">
        //             <span className="font-bold whitespace-nowrap">Cantidad: {productos.quantity}</span>
        //         </div>
        //         {/* <button onClick={handleRemove}><RemoveIcon /></button> */}
        //     </div>
        // </div>
    )
}

export default ItemCart;