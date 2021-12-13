import React, {useEffect, useState} from 'react';
import Nav  from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';
import './styles.css';

const Secciones = [
    {id:1, nombre: "INICIO", ruta: "/"},
    {id:2, nombre: "NOSOTROS", ruta: "/nosotros"},
    {id:3, nombre: "SERVICIOS", ruta: "/servicios"},
    {id:4, nombre: "TIENDA", ruta: "/tienda"},
    {id:5, nombre: "CONTACTO", ruta: "/contacto"},
    {id:6, nombre: <CartWidget />, ruta: "/carrito"},
]

const Link = () => {
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const promesaSecciones = new Promise((res, rej) => {
            res(Secciones);
        });
        
        promesaSecciones.then(res => setSecciones(res));
    }, []);

    console.log(secciones);

    return (
        <>
            {secciones.map((seccion) => {
                return(
                    <Nav.Link key={seccion.id} href={seccion.ruta}>{seccion.nombre}</Nav.Link>
                )
            })} 
        </>
    )
}

export default Link;