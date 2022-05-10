
const listaTarjetas = () => fetch("https://aluraweek.herokuapp.com/profile").then(respuesta => respuesta.json());

const crearTarjeta = async(Seccion, Imagen, Product, Price, Desc, id) => {
    return fetch ('https://aluraweek.herokuapp.com/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({Seccion, Imagen, Product, Price, Desc, id})
    })
}

const eliminarTarjeta = (id) => {
    return fetch(`https://aluraweek.herokuapp.com/profile/${id}`, {
        method: "DELETE"
    });
}
const buscarTarjeta = (id) => {
    return fetch(`https://aluraweek.herokuapp.com/profile/${id}`).then((respuesta) => respuesta.json());
}

const actualizarTarjeta = (Seccion, Imagen, Product, Price, Desc, id) => {
    return fetch(`https://aluraweek.herokuapp.com/profile/${id}`, {
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
