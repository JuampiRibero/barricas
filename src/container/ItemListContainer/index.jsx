import React, {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList';

const Items = [
    {id: 1, img: "https://i.ibb.co/rb8Smz1/la-linda-malbec.jpg", nombre: "LA LINDA MALBEC", precio: 950, descripcion: "Característico color rojo intenso. Aromas a guinda y especias. En boca se perciben taninos equilibrados debido a 3 meses de añejamiento en roble francés. Aterciopelado. De buena estructura, fino, moderno."},
    {id: 2, img: "https://i.ibb.co/Lx56sR9/luigi-bosca-malbec.jpg", nombre: "LUIGI BOSCA MALBEC", precio: 1700, descripcion: "Color rojo rubí intenso. Presenta aromas de frutos rojos maduros, especias y pimienta negra. La intensidad de su entrada en boca se complementa con la suavidad y dulzor de los taninos. Un vino de gran cuerpo y estructura."},
    {id: 3, img: "https://i.ibb.co/Y7FsGzW/finca-gabriel-malbec.jpg", nombre: "FINCA GABRIEL MALBEC", precio: 638, descripcion: "Color rojo violáceo oscuro. Aroma intenso a frutas secas. Redondo y una acidez muy equilibrada."},
    {id: 4, img: "https://i.ibb.co/nwSWr8S/cordero-con-piel-de-lobo-malbec.jpg", nombre: "CORDERO CON PIEL DE LOBO MALBEC", precio: 785, descripcion: "Un Malbec joven muy bien elaborado, diferente por su aroma y sabor a frutos maduros. Con una acidez justa deja en boca un picor agradable con un final reforzado por su paso por madera."},
    {id: 5, img: "https://i.ibb.co/nnNxL2B/perro-callejero-malbec.jpg", nombre: "PERRO CALLEJERO BLEND DE MALBEC", precio: 1270, descripcion: "Perro Callejero, fiel a sus convicciones e incansable buscador. Guiado por su olfato enfrenta día a día su propio destino. Perro Callejero que busca ese hueso de oro hasta las últimas consecuencias. No intentes domesticarlo, él es su propio dueño."},
    {id: 6, img: "https://i.ibb.co/Mht1CYD/santa-julia-reserva-malbec.jpg", nombre: "SANTA JULIA RESERVA MALBEC", precio: 710, descripcion: "Color violeta brillante atractivo. Aromas frescos de la zarzamora, violetas y guindas. Excelente estructura, con sabores especiados y de frutas maduras. Final aterciopelado y largo."},
    {id: 7, img: "https://i.ibb.co/cgVYRzy/chac-chac-malbec.jpg", nombre: "CHAC CHAC MALBEC", precio: 990, descripcion: "Color rojo violáceo intenso. Gran concentración, a la nariz presenta aromas a frutos rojos, mermelada de ciruelas y frutillas. En boca predomina también la presencia de frutos rojos, es elegante, amable y muy complejo. Final largo y untuoso."},
    {id: 8, img: "https://i.ibb.co/S5D9m56/las-perdices-malbec.jpg", nombre: "LAS PERDICES MALBEC", precio: 980, descripcion: "Color rojo violáceo intenso. De complejos aromas a frutas rojas, con delicados toques de madera. Suave en boca, equilibrado, con notas de ciruelas y guindas."},
]

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesaItems = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items);
            }, 2000);
        });
        promesaItems.then(res => setItems(res));
    }, []);

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