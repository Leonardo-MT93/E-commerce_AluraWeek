const redireccionarLogin = document.querySelector('.boton_login');
redireccionarLogin.addEventListener('click', (evento) => {
    window.location.href = ('./login.html');
});

const redireccionarProductos = document.querySelector('.boton_login');
redireccionarLogin.addEventListener('click', (evento) => {
    window.location.href = ('./login.html');
});



//DIRECCIONAMIENTO VALIDO SOLO PARA INDEX.HTML

const redireccionarBotonConsolas = document.querySelector('.boton_portada');
redireccionarBotonConsolas.addEventListener('click', (evento) => {
    window.location.href = ('#consolas');
});

const mensajesIniciales = document.querySelectorAll('span');
mensajesIniciales.forEach((span) => {
    span.innerHTML = "";
});

const input = document.querySelectorAll('input');
input.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    })
})
const areaTexto = document.querySelector('textarea');
areaTexto.addEventListener('blur', (areaTexto) => {
    validar(areaTexto.target);
})

function validar(input){
    const tipodeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.nextElementSibling.innerHTML = " ";
    }else{
        input.nextElementSibling.innerHTML = detectarError(tipodeInput ,input);;
    }
}

function detectarError(tipodeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        if(input.validity[error]){  
            mensaje = errores[tipodeInput][error];
        }  
    })
    return mensaje;
}
const errores = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Caracter inválido. Recuerde usar solo letras y espacios"
    },
    mensaje: {
        valueMissing: "El campo nombre no puede estar vacio.",
    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];