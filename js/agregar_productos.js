import { crearProducto } from "./productos_total.js"; 

const submit = document.querySelector('.boton_agregar_producto');
submit.addEventListener('click', (evento) => {
    evento.preventDefault();
    const newSeccion = document.querySelector('.selector_opciones').value;
    const newImagen = document.querySelector('#newImage').src;
    const newProduct = document.querySelector('#newProduct').value;
    const newPrice = document.querySelector('#newPrice').value;
    const newDesc = document.querySelector('#descripcion_producto').value;
    const id = `Producto-${Math.floor(Math.random()*5000)}`; // Genera id aleatorios para la imagen procesada
    const divTarjeta = document.createElement('div');
    const divContenedor = document.createElement('div');
    const lista = document.createElement('ul');
    const pNombre = document.createElement('p');
    const pPrecio = document.createElement('p');
    const pId = document.createElement('p');
    // console.log(newImagen);
    // pNombre.innerHTML = newProduct;
    // pNombre.classList.add("nombre_producto");
    // pPrecio.innerHTML = newPrice;
    // pPrecio.classList.add("precio_producto");
    // pId.innerHTML = id;
    // pId.classList.add("id_producto");

    // lista.appendChild(pNombre);
    // lista.appendChild(pPrecio);
    // lista.appendChild(pId);
    // newImagen.classList.remove("imagen_responsive");
    // newImagen.classList.add("imagen_producto_contenido");
    // divContenedor.appendChild(newImagen);
    // divContenedor.classList.add("contenedor")
    // divTarjeta.appendChild(divContenedor);
    // divTarjeta.appendChild(lista);
    // divTarjeta.classList.add("tarjeta_individual");

    // const ListaTotalProductos = document.querySelector('.ordenar_productos');
    // ListaTotalProductos.appendChild(divTarjeta);
    // console.log(ListaTotalProductos);

        const prodObj = {
            newSeccion,
            newImagen,
            newProduct,
            newPrice,
            newDesc,
            id
        }
        crearProducto(prodObj);
        const ListaProductosTotales = JSON.parse(localStorage.getItem("producto")) || [];
        ListaProductosTotales.push(prodObj);
        localStorage.setItem("producto", JSON.stringify(ListaProductosTotales));  
        window.location.href = ('../agregar_producto.html');
    
    
})


































//BOTON BUSCAR FUNCIONANDO A MEDIAS - FALTA LIMPIAR EL BUFFER
const areaImagen = document.querySelector('.contenido_imagen_responsive');
const imagen = document.querySelector('.imagen_responsive');
let files;
const botonBuscar = document.querySelector('.boton_buscar');
const inputBuscar = document.querySelector('.input_file');
const file = document.querySelector('.input_file').files[0];
inputBuscar.addEventListener('change', (evento) => {
    evento.preventDefault();
    console.log(file);
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
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
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
