import { funcionesTarjeta } from "./controladores.js";
const submit = document.querySelector('.boton_agregar_producto');


const url = new URL (window.location);
const id = url.searchParams.get("id");

if(id === null){
    submit.addEventListener('click', (evento) => {
        evento.preventDefault();
        const Seccion = document.querySelector('.selector_opciones').value;
        const Imagen = document.querySelector('.imagen_responsive').src;
        const Product = document.querySelector('#newProduct').value;
        const Price = document.querySelector('#newPrice').value;
        const Desc = document.querySelector('#descripcion_producto').value;
        const id = `Producto-${Math.floor(Math.random()*5000)}`; // Genera id aleatorios para la imagen procesada
            funcionesTarjeta.crearTarjeta(Seccion, Imagen, Product, Price, Desc, id).then((respuesta) => {
                window.location.href = ('../agregar_producto.html');
            })
    })
}else{
    funcionesTarjeta.buscarTarjeta(id).then((profile) => {
    reemplazarDesc(profile.Imagen, profile.Product, profile.Price, profile.Desc);
    submit.addEventListener('click', (evento) => {
        evento.preventDefault();
        const Seccion = document.querySelector('.selector_opciones').value;
        const Imagen = document.querySelector('.imagen_responsive').src;
        const Product = document.querySelector('#newProduct').value;
        const Price = document.querySelector('#newPrice').value;
        const Desc = document.querySelector('#descripcion_producto').value;
        console.log(Imagen)
            funcionesTarjeta.actualizarTarjeta(Seccion, Imagen, Product, Price, Desc, id).then((respuesta) => {
                window.location.href = ('../index.html');
            })
    })
    
})
function reemplazarDesc(imagen, nombre, precio, descripcion){
    const imagenDesc = document.querySelector('.imagen_responsive');
    const nombreDesc = document.querySelector('#newProduct');
    const precioDesc = document.querySelector('#newPrice');
    const Desc = document.querySelector('#descripcion_producto');
    imagenDesc.src = imagen;
    nombreDesc.value = nombre;
    precioDesc.value = precio;
    Desc.innerHTML = descripcion;
}
}






//BOTON BUSCAR FUNCIONANDO A MEDIAS - FALTA LIMPIAR EL BUFFER
const areaImagen = document.querySelector('.contenido_imagen_responsive');
const imagen = document.querySelector('.imagen_responsive');
let files;
const botonBuscar = document.querySelector('.boton_buscar');
const inputBuscar = document.querySelector('.input_file');
const file = document.querySelector('.input_file').files[0];
inputBuscar.addEventListener('change', (evento) => {
    evento.preventDefault();
    cargarImagen();
})
function cargarImagen(){
    const fileReader = new FileReader ();
    fileReader.addEventListener('load', function(){
        imagen.src = fileReader.result;
    }, false);
    if(file){
        fileReader.readAsDataURL(file);
    }
}



//DRAG AND DROP FUNCIONANDO
areaImagen.addEventListener('dragover', (event) => {
    event.preventDefault();
});
areaImagen.addEventListener('drop', (event) => {
    event.preventDefault();
    files = event.dataTransfer.files; // para obtener las referencias de las imagenes
    if(files.length > 1){
        alert('Solo esta permitido subir 1 imagen');
    }else{
        processFile(files);
    }
});

function processFile(file){
    const docType = file[0].type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg'];
    if(validExtensions.includes(docType)){
        const fileReader = new FileReader(); // Tipo Objeto = nos permite obtener las propiedades por ej su nombre, y asi podes realizarfunciones sobre eso
        const id = `file-${Math.random().toString(32).substring(7)}`; // Genera id aleatorios para la imagen procesada
        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `
            <img src="${fileUrl}" alt="Imagen responsive" class="imagen_responsive" id="newImage">
            `
            areaImagen.removeChild(imagen); //Remuevo la imagen predeterminada
            const html = document.querySelector('.contenido_imagen_responsive').innerHTML;
            document.querySelector('.contenido_imagen_responsive').innerHTML = image + html;    //Agrego la nueva imagen
        });
        fileReader.readAsDataURL(file[0]);
    }else{
        alert("Formato de imagen incorrecto.");
    }
}


// -------------------------------- VALIDACIONES --------------------------------------------
const spanInicial = document.querySelectorAll('span');
spanInicial.forEach((span) => {
    span.innerHTML = "";
});
const detectarInput = document.querySelectorAll('input');
detectarInput.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    }) 
});
const areaTexto = document.querySelectorAll('textarea');
areaTexto.forEach((textarea) => {
    textarea.addEventListener('blur', (textarea) => {
        validar(textarea.target);
    })
});
function validar(input){
    const tipoInput = input.dataset.tipo;  
    if(input.validity.valid){
        input.nextElementSibling.innerHTML = " ";
    }else{
        input.nextElementSibling.innerHTML = detectarErrorInput(tipoInput, input);
    }
}

function detectarErrorInput ( tipoInput, input){
    let mensajeError = "";
    typeError.forEach((error) => {
        if(input.validity[error]){
            mensajeError = erroresProd[tipoInput][error];
        }
    })
    return mensajeError;
}
const erroresProd = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Caracter inválido. Recuerde usar solo letras y espacios"
    },
    mensaje: {
        valueMissing: "El campo nombre no puede estar vacio.",
    },
    email: {
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Dirección de email incorrecta."
    },
    contraseña:{
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Contraseña inválida. Recuerde utilizar al menos una mayuscula, minuscula, numero y un carácter especial"
    },
    busqueda: {
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Contraseña inválida. Recuerde utilizar al menos una mayuscula, minuscula, numero y un carácter especial"
    },
    producto:{
        valueMissing: "El campo nombre de producto no puede estar vacio.",
        patternMismatch: "Caracter inválido. Recuerde usar solo letras y espacios."
    },
    precio:{
        valueMissing: "El campo precio no puede estar vacio.",
        patternMismatch: "Caracter inválido. Recuerde usar solo números, y cáracter especial válido: ($ , .)."
    },
    descripcion:{
        valueMissing: "El campo descripcion no puede estar vacio.",
    },

}

const typeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];
