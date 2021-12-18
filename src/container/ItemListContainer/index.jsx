import React, {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList';
import Items from '../../mocks';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesaItems = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items);
            }, 2000);
        });
        promesaItems.then(res => setItems(res));
    }, [items]);

    console.log(items);
    
    return (
        <div className="container py-5">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;