import { funcionesTarjeta } from "./controladores.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");
let contador = 0;
funcionesTarjeta.buscarTarjeta(id).then((profile) => {
    reemplazar(profile.Imagen, profile.Product, profile.Price, profile.Desc);
})
function reemplazar(imagen, nombre, precio, descripcion){
    const imagenDesc = document.querySelector('.imagen_producto_desc');
    const nombreDesc = document.querySelector('.nombre_producto_desc');
    const precioDesc = document.querySelector('.precio_producto_desc');
    const Desc = document.querySelector('.descripcion_producto');
    imagenDesc.src = imagen;
    nombreDesc.innerHTML = nombre;
    precioDesc.innerHTML = precio;
    Desc.innerHTML = descripcion;
}

const editar = document.querySelector('.boton_editar');
editar.addEventListener('click', (evento) => {
    window.location.href = 'agregar_producto.html?id='+id;
})

const eliminar = document.querySelector('.boton_eliminar');
eliminar.addEventListener('click', (evento) => {
    funcionesTarjeta.eliminarTarjeta(id).then((respuesta) => {
        window.location.href = ('./delete_Success.html');
    }).catch((error) => 'Ocurrio un error')
})

funcionesTarjeta.buscarTarjeta(id).then((respuesta)=> {
    console.log(respuesta.Seccion);
    funcionesTarjeta.listaTarjetas().then((tarjetas) => {
        const arraySeccion = tarjetas;
        arraySeccion.forEach((objetos)=> {
            if(objetos.Seccion == respuesta.Seccion && id != objetos.id && screen.width>800){
                crearEtiqueta(objetos);
            }else if(objetos.Seccion == respuesta.Seccion && id != objetos.id && screen.width<800 && contador<4){
                crearEtiqueta(objetos);
                contador++;
            }
        })
    })
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