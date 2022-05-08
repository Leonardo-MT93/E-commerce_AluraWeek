import { funcionesTarjeta } from "./controladores.js";

funcionesTarjeta.listaTarjetas()
.then((respuesta) => {
    const arrayObj = respuesta;
    arrayObj.forEach((obj) => {
        crearEtiqueta(obj)
    })
    
})

function crearEtiqueta(obj){
    const listaSW = document.querySelector('.ordenar_productos_SW');
    const listaConsolas = document.querySelector('.ordenar_productos_consola');
    const listaDiversos = document.querySelector('.ordenar_productos_diversos');
    const prodIndividual = document.createElement('div');
    const imagenProducto = document.createElement('img');
    const listaDatos = document.createElement('ul');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    const etiqueta = document.createElement('a');
    etiqueta.href = "descripcion_producto.html?id="+obj.id;
    etiqueta.innerHTML = 'Ver producto';
    etiqueta.classList.add('sublink');
    precioProducto.innerHTML = obj.Price;
    precioProducto.classList.add('precio_producto')
    nombreProducto.innerHTML = obj.Product;
    nombreProducto.classList.add('nombre_producto')
    listaDatos.appendChild(nombreProducto);
    listaDatos.appendChild(precioProducto);
    listaDatos.appendChild(etiqueta);
    imagenProducto.src = obj.Imagen;
    imagenProducto.classList.add('imagen_producto')
    prodIndividual.appendChild(imagenProducto);
    prodIndividual.appendChild(listaDatos);
    prodIndividual.classList.add('producto_individual')
    if(obj.Seccion == 'Star Wars'){
        listaSW.appendChild(prodIndividual);
    }else if(obj.Seccion == 'Consolas'){
        listaConsolas.appendChild(prodIndividual);
    }else{
        listaDiversos.appendChild(prodIndividual)
    }
}