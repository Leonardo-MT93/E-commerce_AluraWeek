import { funcionesTarjeta } from "./controladores.js";
import { Session } from "../session/check_session.js";

Session.comprobarUser();
Session.redireccionamiento();
const primeraFuncion = ()=>{
    funcionesTarjeta.listaTarjetas()
    .then((respuesta) => {
        const arrayObj = respuesta;
        arrayObj.forEach((obj) => {
            crearEtiquetaTotal(obj);
        })
    });
}
primeraFuncion();
const botonAgregar = document.querySelector('.boton_agregar_producto');
botonAgregar.addEventListener('click', (evento) => {
    window.location.href = ('./agregar_producto.html');
});
funcionesTarjeta.CheckUser().then((respuesta)=> {
    const log = respuesta.Status;
    if(log == 'on'){
        botonAgregar.classList.remove('sin_acceso');
    }
})

function crearEtiquetaTotal(obj){
    funcionesTarjeta.CheckUser().then((respuesta)=>{
        const log = respuesta.Status;
        if(log == 'on'){
            const ProductosTotales = document.querySelector('.ordenar_productos_total');
            const tarjetaIndividual = document.createElement('div');
            const contenedor = document.createElement('div');
            const imagenProducto = document.createElement('img');
            const listaDatos = document.createElement('ul');
            const nombreProducto = document.createElement('p');
            const precioProducto = document.createElement('p');
            const idProducto = document.createElement('p');
            const deleteIcon = document.createElement('img');
            const createIcon = document.createElement('img');
            const divIcon = document.createElement('div');
            const create = document.createElement('a');
            const deleteTarget = document.createElement('a');
            deleteTarget.href = "descripcion_producto.html?id="+obj.id;
            create.href = 'agregar_producto.html?id='+obj.id;
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
            deleteIcon.src = "img/delete.png";
            deleteIcon.classList.add('icono');
            createIcon.src = 'img/edit.png';
            createIcon.classList.add('icono');
            deleteTarget.appendChild(deleteIcon);
            create.appendChild(createIcon);
            divIcon.appendChild(deleteTarget);
            divIcon.appendChild(create);
            divIcon.classList.add('div_icon')
            contenedor.appendChild(divIcon);
            contenedor.classList.add('contenedor');
            contenedor.appendChild(imagenProducto);
            tarjetaIndividual.appendChild(contenedor);
            tarjetaIndividual.appendChild(listaDatos);
            tarjetaIndividual.id = obj.id;
            tarjetaIndividual.classList.add('tarjeta_individual');
            ProductosTotales.appendChild(tarjetaIndividual);
        }else{
            const ProductosTotales = document.querySelector('.ordenar_productos_total');
            const tarjetaIndividual = document.createElement('div');
            const contenedor = document.createElement('div');
            const imagenProducto = document.createElement('img');
            const listaDatos = document.createElement('ul');
            const nombreProducto = document.createElement('p');
            const precioProducto = document.createElement('p');
            const idProducto = document.createElement('p');
            const deleteIcon = document.createElement('img');
            const createIcon = document.createElement('img');
            const divIcon = document.createElement('div');
            const create = document.createElement('a');
            const deleteTarget = document.createElement('a');
            deleteTarget.href = "descripcion_producto.html?id="+obj.id;
            create.href = 'agregar_producto.html?id='+obj.id;
            precioProducto.innerHTML = obj.Price;
            precioProducto.classList.add('precio_producto')
            nombreProducto.innerHTML = obj.Product;
            nombreProducto.classList.add('nombre_producto')
            idProducto.innerHTML = obj.id;
            idProducto.classList.add('id_producto');
            idProducto.classList.add('sin_acceso');
            listaDatos.appendChild(nombreProducto);
            listaDatos.appendChild(precioProducto);
            listaDatos.appendChild(idProducto);
            imagenProducto.src = obj.Imagen;
            imagenProducto.classList.add('imagen_producto_contenido');
            deleteIcon.src = "img/delete.png";
            deleteIcon.classList.add('icono');
            createIcon.src = 'img/edit.png';
            createIcon.classList.add('icono');
            deleteTarget.appendChild(deleteIcon);
            create.appendChild(createIcon);
            divIcon.appendChild(deleteTarget);
            divIcon.appendChild(create);
            divIcon.classList.add('div_icon');
            divIcon.classList.add('sin_acceso');
            contenedor.appendChild(divIcon);
            contenedor.classList.add('contenedor');
            contenedor.appendChild(imagenProducto);
            tarjetaIndividual.appendChild(contenedor);
            tarjetaIndividual.appendChild(listaDatos);
            tarjetaIndividual.id = obj.id;
            tarjetaIndividual.classList.add('tarjeta_individual');
            ProductosTotales.appendChild(tarjetaIndividual);
        }
    })

}

