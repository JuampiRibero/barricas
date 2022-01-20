import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import Items from '../../mocks';
import Loader from '../../components/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
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
                setItem(res);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return loading ? (
        <h2 className='p-5 text-center'><Loader/></h2>  
    ) : (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
