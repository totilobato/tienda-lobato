const producto1 = {id: 10, title:"EjemploDetalle", description:"Aca va el detalle de mi producto", price:10, pictureUrl: "https://www.lugannabis.com/productos/prensa-para-rosin-club-press-2t/#product-gallery-1"}

export const getProducto1 = new Promise ((resuelto) =>{
    setTimeout(()=>{
        resuelto(producto1  )
    }, 2000);
})