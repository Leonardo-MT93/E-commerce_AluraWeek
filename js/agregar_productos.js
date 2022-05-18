import { funcionesTarjeta } from "./controladores.js";
import { Session } from "../session/check_session.js";

Session.comprobarUser();
const formulario = document.querySelector('.formulario_agregar');
let imagenDragAndDrop = false;
const imagenDefault = "http://127.0.0.1:5500/img/imagenDefault.svg";
const areaImagen = document.querySelector('.contenido_imagen_responsive');
const imagen = document.querySelector('.imagen_responsive');
const url = new URL (window.location);
const id = url.searchParams.get("id");
const textoError = document.querySelector('.error_imagen')
console.log(screen.width);
if(id === null){
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const Seccion = document.querySelector('.selector_opciones').value;
        const Imagen = document.querySelector('.imagen_responsive').src;
        if(Imagen === imagenDefault){
            textoError.innerHTML = "Error. Falta cargar imagen.";
            textoError.classList.add("error_imagen")
        }
        const Product = document.querySelector('#newProduct').value;
        const Price = document.querySelector('#newPrice').value;
        const Desc = document.querySelector('#descripcion_producto').value;
        const id = `Producto-${Math.floor(Math.random()*5000)}`; // Genera id aleatorios para la imagen procesada
        console.log( Seccion);
        console.log( Imagen);
        console.log(Product);
        console.log(Price);
        console.log( Desc);
        console.log(id);
        if(Imagen != imagenDefault){
            funcionesTarjeta.crearTarjeta(Seccion, Imagen, Product, Price, Desc, id).then((respuesta) => {
                            window.location.href = ('../add_Success.html');
                        })
        }    
    })
}else{
    funcionesTarjeta.buscarTarjeta(id).then((profile) => {
    reemplazarDesc(profile.Imagen, profile.Product, profile.Price, profile.Desc);
    formulario.addEventListener('submit', (evento) => {
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
    const imagenMobile = document.querySelector('.insertar_archivo');
    const nombreDesc = document.querySelector('#newProduct');
    const precioDesc = document.querySelector('#newPrice');
    const Desc = document.querySelector('#descripcion_producto');
    if(screen.width<600){
        imagenMobile.src = imagen;
    }else{
        imagenDesc.src = imagen;
    }
    nombreDesc.value = nombre;
    precioDesc.value = precio;
    Desc.innerHTML = descripcion;
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
    console.log(imagen)
    
    const docType = file[0].type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg'];
    if(validExtensions.includes(docType)){
        const fileReader = new FileReader(); // Tipo Objeto = nos permite obtener las propiedades por ej su nombre, y asi podes realizarfunciones sobre eso
        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
                const image = `
                <img src="${fileUrl}" alt="Imagen responsive" class="imagen_responsive" id="newImage">
                `
                areaImagen.removeChild(imagen); //Remuevo la imagen predeterminada
                const html = document.querySelector('.contenido_imagen_responsive').innerHTML;
                document.querySelector('.contenido_imagen_responsive').innerHTML = image + html; 
        });
        fileReader.readAsDataURL(file[0]);
        imagenDragAndDrop = true;
        textoError.innerHTML = "";
        textoError.classList.remove("error_imagen")
        
    }else{
        alert("Formato de imagen incorrecto.");
    }
}




//BOTON BUSCAR FUNCIONANDO A MEDIAS - FALTA LIMPIAR EL BUFFER


let files;
const inputBuscar = document.querySelector('.input_file');
const inputResponsive = document.querySelector('.input_file_responsive');
const imagenResponsive = document.querySelector('.insertar_archivo')
inputResponsive.addEventListener('change', (evento)=>{
    const file = document.querySelector('.input_file_responsive').files[0];
    console.log(imagenDragAndDrop)
    cargarImagen(file);
})
inputBuscar.addEventListener('change', (evento)=>{
    const file = document.querySelector('.input_file').files[0];
    cargarImagen(file);
})
function cargarImagen(file){
    const fileReader = new FileReader ();
    fileReader.addEventListener('load', function(){
        imagen.src = fileReader.result;
        imagenResponsive.src = fileReader.result;
    }, false);
    if(file && imagenDragAndDrop == false){
        fileReader.readAsDataURL(file);
        textoError.innerHTML = "";
        textoError.classList.remove("error_imagen")
    }else{
        alert('Ya hay una imagen existente');
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
        patternMismatch: "Caracter inválido. Recuerde usar solo letras y espacios. Máximo 60 caracteres. "
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
