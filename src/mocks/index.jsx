const Items = [
    {
        id: '1',
        img: 'https://i.ibb.co/rb8Smz1/la-linda-malbec.jpg',
        nombre: 'LA LINDA MALBEC',
        bodega: 'luigi bosca',
        precio: 950,
        stock: 5,
        descripcion: 'Característico color rojo intenso. Aromas a guinda y especias. En boca se perciben taninos equilibrados debido a 3 meses de añejamiento en roble francés. Aterciopelado. De buena estructura, fino, moderno.'
    },
    {
        id: '2',
        img: 'https://i.ibb.co/Lx56sR9/luigi-bosca-malbec.jpg',
        nombre: 'LUIGI BOSCA MALBEC',
        bodega: 'luigi bosca',
        precio: 1700,
        stock: 5,
        descripcion: 'Color rojo rubí intenso. Presenta aromas de frutos rojos maduros, especias y pimienta negra. La intensidad de su entrada en boca se complementa con la suavidad y dulzor de los taninos. Un vino de gran cuerpo y estructura.'
    },
    {
        id: '3',
        img: 'https://i.ibb.co/Y7FsGzW/finca-gabriel-malbec.jpg',
        nombre: 'FINCA GABRIEL MALBEC',
        bodega: 'jorge rubio',
        precio: 638,
        stock: 5,
        descripcion: 'Color rojo violáceo oscuro. Aroma intenso a frutas secas. Redondo y una acidez muy equilibrada.'
    },
    {
        id: '4',
        img: 'https://i.ibb.co/nwSWr8S/cordero-con-piel-de-lobo-malbec.jpg',
        nombre: 'CORDERO CON PIEL DE LOBO MALBEC',
        bodega: 'los toneles',
        precio: 785,
        stock: 5,
        descripcion: 'Un Malbec joven muy bien elaborado, diferente por su aroma y sabor a frutos maduros. Con una acidez justa deja en boca un picor agradable con un final reforzado por su paso por madera.'
    },
    {
        id: '5',
        img: 'https://i.ibb.co/nnNxL2B/perro-callejero-malbec.jpg',
        nombre: 'PERRO CALLEJERO BLEND DE MALBEC',
        bodega: 'los toneles',
        precio: 1270,
        stock: 5,
        descripcion: 'Perro Callejero, fiel a sus convicciones e incansable buscador. Guiado por su olfato enfrenta día a día su propio destino. Perro Callejero que busca ese hueso de oro hasta las últimas consecuencias. No intentes domesticarlo, él es su propio dueño.'
    },
    {
        id: '6',
        img: 'https://i.ibb.co/Mht1CYD/santa-julia-reserva-malbec.jpg',
        nombre: 'SANTA JULIA RESERVA MALBEC',
        bodega: 'santa julia',
        precio: 710,
        stock: 5,
        descripcion: 'Color violeta brillante atractivo. Aromas frescos de la zarzamora, violetas y guindas. Excelente estructura, con sabores especiados y de frutas maduras. Final aterciopelado y largo.'
    },
    {
        id: '7',
        img: 'https://i.ibb.co/cgVYRzy/chac-chac-malbec.jpg',
        nombre: 'CHAC CHAC MALBEC',
        bodega: 'las perdices',
        precio: 990,
        stock: 5,
        descripcion: 'Color rojo violáceo intenso. Gran concentración, a la nariz presenta aromas a frutos rojos, mermelada de ciruelas y frutillas. En boca predomina también la presencia de frutos rojos, es elegante, amable y muy complejo. Final largo y untuoso.'
    },
    {
        id: '8',
        img: 'https://i.ibb.co/S5D9m56/las-perdices-malbec.jpg',
        nombre: 'LAS PERDICES MALBEC',
        bodega: 'las perdices',
        precio: 980,
        stock: 5,
        descripcion: 'Color rojo violáceo intenso. De complejos aromas a frutas rojas, con delicados toques de madera. Suave en boca, equilibrado, con notas de ciruelas y guindas.'
    },
    {
        id: '9',
        img: 'https://i.ibb.co/KL3m3JX/la-linda-cabernet-sauvignon.jpg',
        nombre: 'LA LINDA CABERNET SAUVIGNON',
        bodega: 'luigi bosca',
        precio: 950,
        stock: 5,
        descripcion: 'De color rojo granate con tintes negruzcos. Se sienten aromas a blackberries, pimienta negra y mora. En boca es persistente, intenso, especiado, de taninos jóvenes resultantes de sus 3 meses de añejamiento en roble francés y americano.'
    },
    {
        id: '10',
        img: 'https://i.ibb.co/BTs32WR/luigi-bosca-cabernet-sauvignon.jpg',
        nombre: 'LUIGI BOSCA CABERNET SAUVIGNON',
        bodega: 'luigi bosca',
        precio: 1700,
        stock: 5,
        descripcion: 'Rojo rubí, brillante, limpio. Fresco, frutado aterciopelado. Aromas de frutas rojas y negras, violetas y chocolate. De gran estructura y cuerpo, un vino de carácter y exquisita elegancia.'
    },
    {
        id: '11',
        img: 'https://i.ibb.co/7QxLDfK/las-perdices-cabernet-sauvignon.jpg',
        nombre: 'LAS PERDICES CABERNET SAUVIGNON',
        bodega: 'las perdices',
        precio: 980,
        stock: 5,
        descripcion: 'Color rojo rubí intenso. Aromas de cerezas con sutiles notas de pimienta y suaves aportes de la madera. Suave en boca, balanceado, con aromas a cerezas y cassis.'
    },
    {
        id: '12',
        img: 'https://i.ibb.co/d7szqQT/finca-gabriel-syrah.jpg',
        nombre: 'FINCA GABRIEL SYRAH',
        bodega: 'jorge rubio',
        precio: 638,
        stock: 5,
        descripcion: 'Color rojo oscuro con tonos violáceos muy intensos. Aromas de zarzamora y frambuesa. Un vino con mucho cuerpo, textura aterciopelada y un final en boca equilibrado.'
    },
    {
        id: '13',
        img: 'https://i.ibb.co/vjk9vGJ/santa-julia-chenin-dulce-natural.jpg',
        nombre: 'SANTA JULIA CHENIN DULCE NATURAL',
        bodega: 'santa julia',
        precio: 530,
        stock: 5,
        descripcion: 'Color amarillo verdoso de buena intensidad. Aroma a durazno blanco, damasco, hierbas frescas y algunas notas cítricas como limón y pomelo. En el sabor se distinguen una entrada dulce, notas cítricas, con un buen equilibrio entre la acidez y el azúcar natural.'
    },
    {
        id: '14',
        img: 'https://i.ibb.co/HrRqYJt/chac-chac-sauvignon-blanc.jpg',
        nombre: 'CHAC CHAC SAUVIGNON BLANC',
        bodega: 'las perdices',
        precio: 990,
        stock: 5,
        descripcion: 'Color amarillo verdoso muy sutil, notas de espárrago, ruda, pomelo rosado, con sutiles notas minerales. En boca, buen ataque, acidez marcada y final prolongado, remarcando las notas típicas de la variedad.'
    },
    {
        id: '15',
        img: 'https://i.ibb.co/BwCv77v/finca-gabriel-chardonnay.jpg',
        nombre: 'FINCA GABRIEL CHARDONNAY',
        bodega: 'jorge rubio',
        precio: 638,
        stock: 5,
        descripcion: 'Color amarillo con tonos verdes muy vivaces. Aroma intenso que recuerda a bananas y ananá. Sabor fresco con entrada dulce en boca.'
    },
];

export default Items;