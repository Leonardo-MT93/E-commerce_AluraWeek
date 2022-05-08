


// id =  `Producto-${Math.floor(Math.random()*5000)}`;

// const seccionSW = document.querySelector('.titulo_starwars').innerHTML;
// const imagenProd = document.querySelectorAll('.imagen_SW');
// const nombreProd = document.querySelectorAll('.nombre_SW');
// const precioProd = document.querySelectorAll('.precio_SW');
// const seccionCons = document.querySelector('.titulo_consolas').innerHTML;
// const imagenCons = document.querySelectorAll('.imagen_consola');
// const nombreCons = document.querySelectorAll('.nombre_consola');
// const precioCons = document.querySelectorAll('.precio_consola');
// const seccionDiv = document.querySelector('.titulo_diversos').innerHTML;
// const imagenDiv = document.querySelectorAll('.imagen_diversos');
// const nombreDiv = document.querySelectorAll('.nombre_diversos');
// const precioDiv = document.querySelectorAll('.precio_diversos');


// const descProd = 'descripcion del producto';

// const arrayProductos = JSON.parse(localStorage.getItem("producto")) || [];

// agregarProductos(imagenProd, nombreProd, precioProd, seccionSW, descProd, 0000, arrayProductos);
// agregarProductos(imagenCons, nombreCons, precioCons, seccionCons, descProd, 05, arrayProductos);
// agregarProductos(imagenDiv, nombreDiv, precioDiv, seccionDiv, descProd, 0010, arrayProductos);

// function agregarProductos(imagenes, nombres, precios, seccionproducto, descripcion, idInicial, arrayProductos){
//     for(let i = 0; i<imagenes.length; i++){
//         Imagen = imagenes[i].src;
//         Product = nombres[i].innerHTML;
//         Price = precios[i].innerHTML;
//         Seccion = seccionproducto;
//         Desc = descripcion;
//         id =  idInicial+[i];
    
//         const Producto = {
//             Seccion,
//             Imagen,
//             Product,
//             Price,
//             Desc,
//             id
//         }
//         if(arrayProductos.some(arrayProductos => arrayProductos.id === id)){
//             break;
//         }else{
//             arrayProductos.push(Producto)
//         }
//     }
// }
// console.log(arrayProductos)
// localStorage.setItem("producto", JSON.stringify(arrayProductos)); 

// const listaSW = document.querySelector('.ordenar_productos_SW');
// const listaConsolas = document.querySelector('.ordenar_productos_consola');
// const listaDiversos = document.querySelector('.ordenar_productos_diversos');
// arrayProductos.forEach((Producto) => {
//     crearEtiqueta(Producto);
// });

// function crearEtiqueta(obj){
//     const prodIndividual = document.createElement('div');
//     const imagenProducto = document.createElement('img');
//     const listaDatos = document.createElement('ul');
//     const nombreProducto = document.createElement('p');
//     const precioProducto = document.createElement('p');
//     const etiqueta = document.createElement('a');
//     etiqueta.href = "#";
//     etiqueta.innerHTML = 'Ver producto';
//     etiqueta.classList.add('sublink');
//     precioProducto.innerHTML = obj.Price;
//     precioProducto.classList.add('precio_producto')
//     nombreProducto.innerHTML = obj.Product;
//     nombreProducto.classList.add('nombre_producto')
//     listaDatos.appendChild(nombreProducto);
//     listaDatos.appendChild(precioProducto);
//     listaDatos.appendChild(etiqueta);
//     imagenProducto.src = obj.Imagen;
//     imagenProducto.classList.add('imagen_producto')
//     prodIndividual.appendChild(imagenProducto);
//     prodIndividual.appendChild(listaDatos);
//     prodIndividual.classList.add('producto_individual')
//     if(obj.Seccion == 'Star Wars'){
//         listaSW.appendChild(prodIndividual);
//     }else if(obj.Seccion == 'Consolas'){
//         listaConsolas.appendChild(prodIndividual);
//     }else{
//         listaDiversos.appendChild(prodIndividual)
//     }
// }
// eliminarTarjetasHTML()
// function eliminarTarjetasHTML(){
//     const ListaTotalDiversos = document.querySelector('.ordenar_productos_diversos');
//     const ListaTotalSW = document.querySelector('.ordenar_productos_SW');
//     const ListaTotalConsola = document.querySelector('.ordenar_productos_consola');

//     const tarjetasSW = document.querySelectorAll('.producto_individual_SW');
//     const tarjetasconsola = document.querySelectorAll('.producto_individual_consola');
//     const tarjetasdiversos = document.querySelectorAll('.producto_individual_diversos');
//     tarjetasSW.forEach( (tarjeta) => {
//         ListaTotalSW.removeChild(tarjeta)
//     })
//     tarjetasconsola.forEach( (tarjeta) => {
//         ListaTotalConsola.removeChild(tarjeta)
//     })
//     tarjetasdiversos.forEach( (tarjeta) => {
//         ListaTotalDiversos.removeChild(tarjeta)
//     })
// }