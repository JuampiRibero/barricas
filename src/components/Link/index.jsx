import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';

const Secciones = [
    {id: '1', nombre: 'INICIO', ruta: '/'},
    {id: '2', nombre: 'NOSOTROS', ruta: '/nosotros'},
    {id: '3', nombre: 'TIENDA', ruta: '/tienda'},
    {id: '4', nombre: 'CONTACTO', ruta: '/contacto'},
    {id: '5', nombre: <CartWidget />, ruta: '/carrito'},
]

const Bodegas = [
    {id: '3.1', nombre: 'LUIGI BOSCA', ruta: '/bodega/luigi bosca'},
    {id: '3.2', nombre: 'JORGE RUBIO', ruta: '/bodega/jorge rubio'},
    {id: '3.3', nombre: 'LOS TONELES', ruta: '/bodega/los toneles'},
    {id: '3.4', nombre: 'SANTA JULIA', ruta: '/bodega/santa julia'},
    {id: '3.5', nombre: 'LAS PERDICES', ruta: '/bodega/las perdices'},
]

const ItemLink = () => {
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const getSecciones = new Promise((res, rej) => {
            res(Secciones);
        });
        
        getSecciones.then(res => setSecciones(res));
    }, []);

    return (
        <>
            {secciones.map((seccion) => {
                return(
                    <Link className='nav-link' key={seccion.id} to={seccion.ruta}>{seccion.nombre}</Link>
                )
            })} 
        </>
    )
}

export const ItemLinkBodega = () => {
    const [bodegas, setBodegas] = useState([]);

    useEffect(() => {
        const getBodegas = new Promise((res, rej) => {
            res(Bodegas);
        });
        
        getBodegas.then(res => setBodegas(res));
    }, []);

    return (
        <>
            {bodegas.map((bodega) => {
                return(
                    <Link className='nav-link-bodega' key={bodega.id} href={bodega.ruta} to={bodega.ruta}>{bodega.nombre}</Link>
                )
            })} 
        </>
    )
}

export default ItemLink;