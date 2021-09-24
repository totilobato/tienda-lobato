const productos = [
    { id: 1, title: "Bong de Vidrio", description: "Apto para fumar Rosin.", price: 4500, categoryId:"Parafernalia", pictureUrl:"https://www.lugannabis.com/productos/carpa-de-cultivo-100x100x200/#product-gallery-2"},
    { id: 2, title: "Carpa Indoor", description: "100 x 100 x 200", price: 22000, categoryId:"Carpas", pictureUrl:"https://www.lugannabis.com/productos/carpa-de-cultivo-100x100x200/#product-gallery-2" },
    { id: 3, title: "Monster Bloom", description: "130Gramos", price: 2500, categoryId:"Fertilizantes", pictureUrl:"https://articulo.mercadolibre.com.ar/MLA-790409397-monster-bloom-130g-grotek-original-engordador-floracion-_JM#position=3&search_layout=stack&type=item&tracking_id=86145a49-322e-45cd-8f8e-471303466c36&gid=1&pid=1" },
    { id: 4, title: "Papeles OCB", description: "Los mejores en el mercado", price: 80, categoryId:"Parafernalia", pictureUrl:"https://www.lugannabis.com/productos/papelillos-ocb-premium-1-1-4/#product-gallery" },
    { id: 5, title: "Prensa Hidráulica", description: "8 toneladas", price: 50000, categoryId:"Parafernalia", pictureUrl:"https://www.lugannabis.com/productos/prensa-para-rosin-club-press-2t/#product-gallery-1" },
    { id: 6, title: "Picador RAW", description: "Metal, 3 partes", price: 2700, categoryId:"Parafernalia", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" },
    { id: 7, title: "LED 400w", description: "Full Spectrum", price: 22000, categoryId:"Iluminacion", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" },
    { id: 8, title: "Sodio 600W", description: "Full Spectrum", price: 13000, categoryId:"Iluminacion", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" },
    { id: 9, title: "GrowMix", description: "80 LITROS", price: 1500, categoryId:"Sustratos", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" },
    { id: 10, title: "BoraBora Sustrato", description: "25 LITROS", price: 600, categoryId:"Sustratos", pictureUrl:"https://www.lugannabis.com/productos/picador-six-shooter-1-1-4-raw/#product-gallery-1" }

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