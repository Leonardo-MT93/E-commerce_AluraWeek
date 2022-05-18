import { funcionesTarjeta } from "./controladores.js";
import { Session } from "../session/check_session.js";

Session.comprobarUser();
Session.redireccionamiento();
const textoError = document.querySelector('.texto_todos_productos');
funcionesTarjeta.listaBusqueda().then((resultado) => {
    console.log(resultado);
    const array = resultado;
    if(array.length === 0){
        textoError.innerHTML = "No se encontraron productos."
    }else{
        array.forEach((obj)=> {
            crearEtiqueta(obj);
        })
    }
})
function crearEtiqueta(obj){
    const ordenarProductos = document.querySelector('.ordenar_productos')
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
    ordenarProductos.appendChild(prodIndividual);
}
