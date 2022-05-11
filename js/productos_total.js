import { funcionesTarjeta } from "./controladores.js";

funcionesTarjeta.listaTarjetas()
.then((respuesta) => {
    const arrayObj = respuesta;
    arrayObj.forEach((obj) => {
        crearEtiquetaTotal(obj)
    })
    const editar = document.querySelector('.boton_editar');
editar.addEventListener('click', (evento) => {
    console.log(evento.target)
    // window.location.href = 'agregar_producto.html?id='+id;
})
const eliminar = document.querySelector('.boton_eliminar');
eliminar.addEventListener('click', (evento) => {
    console.log('ELIMINADO')
    // funcionesTarjeta.eliminarTarjeta(id).then((respuesta) => {
    //     window.location.href = ('./delete_Success.html');
    // }).catch((error) => 'Ocurrio un error')
})
})




const botonAgregar = document.querySelector('.boton_agregar_producto');
botonAgregar.addEventListener('click', (evento) => {
    window.location.href = ('./agregar_producto.html');
});



function crearEtiquetaTotal(obj){
    const ProductosTotales = document.querySelector('.ordenar_productos_total');
    const tarjetaIndividual = document.createElement('div');
    const contenedor = document.createElement('div');
    const imagenProducto = document.createElement('img');
    const listaDatos = document.createElement('ul');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    const idProducto = document.createElement('p');
    const deleteIcon = document.createElement('img');
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const botonCreate = document.createElement('button');
    const botonEliminate = document.createElement('button');
    const createIcon = document.createElement('img');
    const divIcon = document.createElement('div');

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
    botonEliminate.id = 'btn-delete';
    botonEliminate.classList.add('boton_eliminar');
    deleteIcon.src = "img/delete.png";
    deleteIcon.classList.add('icono');
    label1.htmlFor = 'btn-delete'
    botonCreate.id = 'btn-create';
    botonCreate.classList.add('boton_editar');
    createIcon.src = 'img/edit.png';
    createIcon.classList.add('icono');
    label2.htmlFor = 'btn-create';
    label1.classList.add('botones_eliminar_editar');
    label2.classList.add('botones_eliminar_editar')
    label1.appendChild(deleteIcon);
    label2.appendChild(createIcon);
    
    divIcon.appendChild(label1);
    divIcon.appendChild(label2);
    divIcon.appendChild(botonCreate);
    divIcon.appendChild(botonEliminate);
    divIcon.classList.add('div_icon')
    contenedor.appendChild(divIcon);
    contenedor.classList.add('contenedor');


    contenedor.appendChild(imagenProducto);
    tarjetaIndividual.appendChild(contenedor);
    tarjetaIndividual.appendChild(listaDatos);
    tarjetaIndividual.classList.add('tarjeta_individual');
    ProductosTotales.appendChild(tarjetaIndividual);

}


