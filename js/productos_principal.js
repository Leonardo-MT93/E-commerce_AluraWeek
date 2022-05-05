const seccionSW = document.querySelector('.titulo_starwars').innerHTML;
const imagenProd = document.querySelectorAll('.imagen_SW');
const nombreProd = document.querySelectorAll('.nombre_SW');
const precioProd = document.querySelectorAll('.precio_SW');
const seccionCons = document.querySelector('.titulo_consolas').innerHTML;
const imagenCons = document.querySelectorAll('.imagen_consola');
const nombreCons = document.querySelectorAll('.nombre_consola');
const precioCons = document.querySelectorAll('.precio_consola');
const seccionDiv = document.querySelector('.titulo_diversos').innerHTML;
const imagenDiv = document.querySelectorAll('.imagen_diversos');
const nombreDiv = document.querySelectorAll('.nombre_diversos');
const precioDiv = document.querySelectorAll('.precio_diversos');

const descProd = 'descripcion del producto';
const arrayProductos = []

agregarProductos(imagenProd, nombreProd, precioProd, seccionSW, descProd, arrayProductos);
agregarProductos(imagenCons, nombreCons, precioCons, seccionCons, descProd, arrayProductos);
agregarProductos(imagenDiv, nombreDiv, precioDiv, seccionDiv, descProd, arrayProductos);

function agregarProductos(imagenes, nombres, precios, seccionproducto, descripcion, arrayProductos){
    for(let i = 0; i<imagenes.length; i++){
        Imagen = imagenes[i];
        Product = nombres[i].innerHTML;
        Price = precios[i].innerHTML;
        Seccion = seccionproducto;
        Desc = descripcion;
        id =  `Producto-${Math.floor(Math.random()*5000)}`;
    
        const Producto = {
            Seccion,
            Imagen,
            Product,
            Price,
            Desc,
            id
        }
        arrayProductos.push(Producto)
    }
}

console.log(arrayProductos)
