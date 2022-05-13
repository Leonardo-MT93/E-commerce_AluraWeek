import { funcionesTarjeta } from "../js/controladores.js";


function comprobarUser(){
    const btnLogin = document.querySelector('.boton_login');
    const texto = document.querySelector('.LOGUEADO');
    const contenedor = document.querySelector('.logged_on');
    const btnSalir = document.querySelector('.btn_loggedoff');
    funcionesTarjeta.CheckUser().then((respuesta)=> {
        if(screen.width > 800){
            if(respuesta.Status == 'on'){
                btnLogin.classList.add('boton_login_off');
                texto.textContent = "Session: " + respuesta.User; 
                btnSalir.classList.remove('hidden');
            }else{
                btnLogin.classList.remove('hidden');
                btnLogin.classList.remove('boton_login_off');
                contenedor.classList.add('logged_off');
            }
        }
        else if (screen.width < 800){
            if(respuesta.Status == 'on'){
                btnLogin.classList.add('boton_login_off');
                texto.classList.add('hidden')
                btnSalir.classList.remove('hidden');
            }else{
                btnLogin.classList.remove('hidden');
                btnLogin.classList.remove('boton_login_off');
                contenedor.classList.add('logged_off');
            }
        }
        
    })
    btnSalir.addEventListener('click', (event)=> {
        event.preventDefault();
        funcionesTarjeta.UpdateSession('leon@alura.com', 'Leon2022*', 'off').then((respuesta) => {
            window.location.href = 'index.html';
        })
    })
}

function redireccionamiento(){
    const redireccionarLogin = document.querySelector('.boton_login');
    redireccionarLogin.addEventListener('click', (evento) => {
        window.location.href = ('./login.html');
    });
    
}



export const Session = {
    comprobarUser,
    redireccionamiento,
}