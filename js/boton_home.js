const btnMobile = document.querySelector('.logo_aluraweek');
const btnDesktop = document.querySelector('.logo_aluraweek_desktop');

btnMobile.addEventListener('click', (event)=> {
    window.location.href = 'index.html';
});
btnDesktop.addEventListener('click', (event)=> {
    window.location.href = 'index.html';
    console.log('tocado')
});