
const listaTarjetas = () => fetch("http://localhost:3000/profile").then(respuesta => respuesta.json());

const crearTarjeta = async(Seccion, Imagen, Product, Price, Desc, id) => {
    return fetch ('http://localhost:3000/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({Seccion, Imagen, Product, Price, Desc, id})
    })
}

const eliminarTarjeta = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    });
}
const buscarTarjeta = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then((respuesta) => respuesta.json());
}

const actualizarTarjeta = (Seccion, Imagen, Product, Price, Desc, id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Seccion, Imagen, Product, Price, Desc, id})
    })
    .then( respuesta => console.log(respuesta))
    .catch( error => console.log(error))
}


 export const funcionesTarjeta = {
    crearTarjeta,
    listaTarjetas,
    eliminarTarjeta,
    buscarTarjeta,
    actualizarTarjeta,
} 
