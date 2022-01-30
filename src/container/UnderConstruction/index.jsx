import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import './styles.css';

const UnderConstructionContainer = () => {
    const [underConstruction, setUnderConstruction] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getUnderConstruction = new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, 2000);
        });

        getUnderConstruction
            .then((res) => {
                setUnderConstruction(res);
            })
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <h2 className='p-5 text-center'><Loader/></h2> 
    ) : (
        <div className='text-center'>
            <img src='https://i.ibb.co/k1jHFRy/section-under-construction.jpg' alt='Under Construction' title='Under Construction'  height={800} width={800} loading='lazy'className='under-construction-img'/>
        </div>
    )
}

export default UnderConstructionContainer;