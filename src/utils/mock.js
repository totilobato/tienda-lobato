const productos = [
    { id: 1, name: "Bong de Vidrio", description: "Apto para fumar Rosin.", price: 4500, category:"parafernalia", pictureUrl:"https://www.lugannabis.com/productos/carpa-de-cultivo-100x100x200/#product-gallery-2"},
    { id: 2, name: "Carpa Indoor", description: "100 x 100 x 200", price: 22000, category:"carpas", pictureUrl:"https://www.lugannabis.com/productos/carpa-de-cultivo-100x100x200/#product-gallery-2" },
    { id: 3, name: "Monster Bloom", description: "130Gramos", price: 2500, category:"fertilizantes", pictureUrl:"https://articulo.mercadolibre.com.ar/MLA-790409397-monster-bloom-130g-grotek-original-engordador-floracion-_JM#position=3&search_layout=stack&type=item&tracking_id=86145a49-322e-45cd-8f8e-471303466c36&gid=1&pid=1" },
    { id: 4, name: "Papeles OCB", description: "Los mejores en el mercado", price: 80, category:"armado", pictureUrl:"https://www.lugannabis.com/productos/papelillos-ocb-premium-1-1-4/#product-gallery" },
    { id: 5, name: "Prensa Hidráulica", description: "8 toneladas", price: 50000, category:"parafernalia", pictureUrl:"https://www.lugannabis.com/productos/prensa-para-rosin-club-press-2t/#product-gallery-1" },
    { id: 6, name: "Picador RAW", description: "Metal, 3 partes", price: 2700, category:"parafernalia", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" }
];

export const getFetch = new Promise((resolve, reject)=>{
    let respuesta = '200'
    if(respuesta==='200'){
        setTimeout (()=>{
            resolve(productos)
        },2000)
    }else{
        reject('404')
    }
})

const producto2 = productos.filter((item)=>item.id===3);
export const getProducto2 = new Promise ((resuelto) =>{
    setTimeout(()=>{
        resuelto(producto2)
    }, 2000);
})