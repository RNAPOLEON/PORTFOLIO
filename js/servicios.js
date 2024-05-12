let headerbar = document.querySelector('.headerbar');
let nav = document.querySelector(' .nav');
let main = document.querySelector(' .main');
let banner = document.querySelector(' .banner');
let toggle = document.querySelector('.toggle');
let servicios = document.querySelector('.servicios');
let contenedorservicios = document.querySelector(' .contenedor-servicios');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    headerbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
    banner.classList.toggle('active');
    servicios.classList.toggle('active');
    contenedorservicios.classList.toggle('active');
}
