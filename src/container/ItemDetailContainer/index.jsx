import Items from '../../mocks';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((res, rej) => {
            setTimeout(() => {
                const miBusqueda = Items.find(item => item.id === itemId);

                res(miBusqueda);
            }, 2000);
        });

        getItems
            .then((res) => {
                setItems(res);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return loading ? (
        <h2 className='p-5 text-center'>CARGANDO...</h2>  
    ) : (
        <div>
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer;
