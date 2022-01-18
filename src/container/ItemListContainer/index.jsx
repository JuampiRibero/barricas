import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { getFirestore } from '../../firebase';
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

    // useEffect(() => {
    //     const bd = getFirestore();
    //     const itemCollection = bd.collection('items');
    //     itemCollection.get().then((value) => let aux = value.doc.map((element) => { return { ...element.data(), id: element.id} });
    // }, []);
    
    return loading ? (
        <h2 className='p-5 text-center'>CARGANDO...</h2> 
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