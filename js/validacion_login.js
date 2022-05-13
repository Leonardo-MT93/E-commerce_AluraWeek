import { funcionesTarjeta } from "./controladores.js";

const usuarioLogueado = 'on';
const formulario = document.querySelector('.formulario_login');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
   const user = document.querySelector('.input_login').value;
    const pass = document.querySelector('#contraseña').value;
    funcionesTarjeta.CheckUser().then((respuesta)=> {
        if(respuesta.Status == 'on'){
            alert('USUARIO YA LOGUEADO')
        }else{
            if(user == respuesta.User && pass == respuesta.Pass){
                funcionesTarjeta.UpdateSession(user, pass, usuarioLogueado).then((respuesta)=> {
                    window.location.href = "index.html"
                });
                
            }else{
                alert('Usuario o contraseña incorrectos. Reingrese usuario y contraseña')
            }
        }
    })    
})






















const spanInicial = document.querySelectorAll('span');
spanInicial.forEach((span) => {
    span.innerHTML = "";
});
document.querySelector('#contraseña').value = "";

const detectarInput = document.querySelectorAll('input');
detectarInput.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    })
});
const areaTexto = document.querySelector('textarea');
areaTexto.addEventListener('blur', (areaTexto) => {
    validar(areaTexto.target);
})

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
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensajeError = errores[tipoInput][error];
        }
    })
    return mensajeError;
}



const errores = {
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
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

export default usuarioLogueado;