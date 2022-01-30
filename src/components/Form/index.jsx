import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';
import './styles.css';

const Form = () => {
    const { cart, clearCart, totalCart} = useCartContext();
    const [id, setId] = useState("");
    const [datosUser, setDatosUser] = useState({
        nombre: " ",
        email: " ",
        tel: 0,
    });

    const handleInputChange = (e) => {
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        });
    };

    const pedido = {
        cliente: datosUser,
        productos: cart,
        total: totalCart(),
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const confirmOrder = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollection = db.collection("orders");
        const query = orderCollection.add(pedido);
        query
            .then(({ id }) => {
                setId(id);
            })
            .catch(() => {
                console.log("error");
            })
            clearCart();
    };

    if (id === "") {
        return (
            <form className="form-user">
                <h1>Completa tus datos</h1>
                <input onChange={handleInputChange} name="nombre" type="text" placeholder="Nombre" required />
                <input onChange={handleInputChange} name="email" type="email" placeholder="Email" required />
                <input onChange={handleInputChange} name="tel" type="tel" placeholder="Telefono" required />
                <button className="btn-finalizarOrders" onClick={confirmOrder}>Confirmar Compra</button>
            </form>
        );
    } else {
        return (
            <div className="form-user">
                <h1>Gracias por tu compra</h1>
                <p>Tu pedido se ha realizado con exito, tu id de compra es: {id}</p>
                <Link to={`/tienda`}>
                    <Button variant="info" size="sm">← Volver a la tienda</Button>
                </Link>
            </div>
        );
    };
};

export default Form;