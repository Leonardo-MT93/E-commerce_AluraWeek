import { funcionesTarjeta } from "./controladores.js";

const barraBusqueda = document.querySelector('.barra_busqueda');
let contador = 0;
const buscar = document.querySelector('.boton_buscar');
buscar.addEventListener('click', filtrar);
function filtrar(){
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
}
