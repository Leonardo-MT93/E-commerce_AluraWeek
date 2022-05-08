import { funcionesTarjeta } from "./controladores.js";

funcionesTarjeta.listaTarjetas()
.then((respuesta) => {
    const arrayObj = respuesta;
    arrayObj.forEach((obj) => {
        crearEtiquetaTotal(obj)
    })
    
})




const botonAgregar = document.querySelector('.boton_agregar_producto');
botonAgregar.addEventListener('click', (evento) => {
    window.location.href = ('./agregar_producto.html');
});



function eliminarTarjetas(){
    const ListaTotal = document.querySelector('.ordenar_productos_total');
    const tarjetas = document.querySelectorAll('.tarjeta_individual');
    tarjetas.forEach( (tarjeta) => {
        ListaTotal.removeChild(tarjeta)
    })
}
function crearEtiquetaTotal(obj){
    const ProductosTotales = document.querySelector('.ordenar_productos_total');
    const tarjetaIndividual = document.createElement('div');
    const contenedor = document.createElement('div');
    const imagenProducto = document.createElement('img');
    const listaDatos = document.createElement('ul');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    const idProducto = document.createElement('p');

    precioProducto.innerHTML = obj.Price;
    precioProducto.classList.add('precio_producto')
    nombreProducto.innerHTML = obj.Product;
    nombreProducto.classList.add('nombre_producto')
    idProducto.innerHTML = obj.id;
    idProducto.classList.add('id_producto');
    listaDatos.appendChild(nombreProducto);
    listaDatos.appendChild(precioProducto);
    listaDatos.appendChild(idProducto);
    imagenProducto.src = obj.Imagen;
    imagenProducto.classList.add('imagen_producto_contenido');
    contenedor.classList.add('contenedor');
    contenedor.appendChild(imagenProducto);
    tarjetaIndividual.appendChild(contenedor);
    tarjetaIndividual.appendChild(listaDatos);
    tarjetaIndividual.classList.add('tarjeta_individual');
    ProductosTotales.appendChild(tarjetaIndividual);

}

