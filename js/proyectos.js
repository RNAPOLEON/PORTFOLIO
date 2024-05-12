let headerbar = document.querySelector('.headerbar');
let nav = document.querySelector(' .nav');
let main = document.querySelector(' .main');
let banner = document.querySelector(' .banner');
let toggle = document.querySelector('.toggle');
let gran = document.querySelector(' .grande');
let carrousel = document.querySelector(' .carrousel');
let titulocarrusel = document.querySelector(' .titulocarrusel');
let proyectos = document.querySelector(' .proyectos');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    headerbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
    banner.classList.toggle('active');
    gran.classList.toggle('active');
    carrousel.classList.toggle('active');
    titulocarrusel.classList.toggle('active');
    proyectos.classList.toggle('active');
}

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
    punto.forEach((cadaPunto, i) => {

        punto[i].addEventListener('click', () => {


            let posicion = i

            let operacion = posicion * -25  


            grande.style.transform = `translateX(${operacion}%)`


            punto.forEach((cadaPunto, i) => {
                // Quitamos la clase ACTIVO a TODOS los punto
                punto[i].classList.remove('activo')
            })
            // Añadir la clase activo en el punto que hemos hecho CLICK
            punto[i].classList.add('activo')

        })
    })

