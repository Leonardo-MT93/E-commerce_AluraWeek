import { funcionesTarjeta } from "./controladores.js";
const barraBusqueda = document.querySelector('.barra_busqueda');
const barraBusquedaMobile = document.querySelector('.input_responsive');
barraBusquedaMobile.value = "";
barraBusqueda.value = "";
let contador = 0;
const buscar = document.querySelector('.logo_buscar_2');
buscar.addEventListener('click', (event)=>{
    event.preventDefault();
    const dato = barraBusqueda.value.toLowerCase();
    if(dato == ''){
        alert('No se introdujo ningún dato')
    }else{
        funcionesTarjeta.listaTarjetas().then((respuesta) => {
            const lista = respuesta;
            lista.forEach((object) => {
                const listaProductos = object.Product.toLowerCase();
                    funcionesTarjeta.eliminarBusqueda(object.id).then((resuelto) => {
                        contador++;
                        if(contador === lista.length){
                            window.location.href = "resultado_busqueda.html"
                        }
                    })
                    if(listaProductos.indexOf(dato) !== -1){         
                        funcionesTarjeta.resultadoBusqueda(object.Seccion, object.Imagen, object.Product, object.Price, object.Desc, object.id)
                        console.log(object.Product);
                    } 
            })
        })
    } 
});

barraBusquedaMobile.addEventListener('keyup', (evento)=> {
    var keycode = evento.keyCode || evento.which;
    if(keycode == 13){
        const dato = barraBusquedaMobile.value.toLowerCase();
    if(dato == ''){
        alert('No se introdujo ningún dato')
    }else{
        funcionesTarjeta.listaTarjetas().then((respuesta) => {
            const lista = respuesta;
            lista.forEach((object) => {
                const listaProductos = object.Product.toLowerCase();
                    funcionesTarjeta.eliminarBusqueda(object.id).then((resuelto) => {
                        contador++;
                        if(contador === lista.length){
                            window.location.href = "resultado_busqueda.html"
                        }
                    })
                    if(listaProductos.indexOf(dato) !== -1){         
                        funcionesTarjeta.resultadoBusqueda(object.Seccion, object.Imagen, object.Product, object.Price, object.Desc, object.id)
                        console.log(object.Product);
                    } 
            })
        })
    } 
    }
})
barraBusquedaMobile.addEventListener('blur', (evento)=> {
    barraBusquedaMobile.value = "";
})

