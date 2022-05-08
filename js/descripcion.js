import { funcionesTarjeta } from "./controladores.js";

const url = new URL (window.location);
const id = url.searchParams.get("id");
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
        window.location.href = ('./index.html');
    }).catch((error) => 'Ocurrio un error')
})