import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Items from '../../mocks';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { bodegaId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((res, rej) => {
            setTimeout(() => {
                const miFiltro = bodegaId 
                ? Items.filter(item => item.bodega === bodegaId)
                : Items;

                res(miFiltro);
            }, 2000);
        });

        getItems
            .then((res) => {
                setItems(res);
            })
            .finally(() => setLoading(false));
    }, [bodegaId]);
    
    return loading ? (
        <h2>CARGANDO...</h2> 
    ) : (
        <div className='container py-5'>
            <h3 className='text-center'>{greeting}</h3>
            <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;