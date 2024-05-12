let headerbar = document.querySelector('.headerbar');
let nav = document.querySelector(' .nav');
let main = document.querySelector(' .main');
let banner = document.querySelector(' .banner');
let toggle = document.querySelector('.toggle');
let content = document.querySelector('.content');
let contacto = document.querySelector(' .contacto');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    headerbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
    banner.classList.toggle('active');
    content.classList.toggle('active');
    contacto.classList.toggle('active');
}


'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

/
punto.forEach((cadaPunto, i) => {
    
    punto[i].addEventListener('click', () => {

       
        let posicion = i
        
        let operacion = posicion * -50

        
        grande.style.transform = `translateX(${operacion}%)`

        
        punto.forEach((cadaPunto, i) => {
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

$(document).ready(function () {
    $('#btnEnviar').on('click', function (e) {
        e.preventDefault(); // Evita que se envíe el formulario de manera predeterminada

        // Obtenemos los valores del formulario
        var nombre = $('input[name="fullname"]').val();
        var email = $('input[name="email"]').val();
        var telefono = $('input[name="phone"]').val();
        var asunto = $('input[name="affair"]').val();
        var mensaje = $('textarea[name="message"]').val();

        // Configuramos el correo electrónico que se enviará
        var destinatario = 'romanoyaco@gmail.com'; // Cambia esto por tu dirección de correo electrónico
        var asuntoCorreo = 'Mensaje de contacto desde tu sitio web';
        var cuerpoCorreo = 'Nombre: ' + nombre + '\n' +
            'Email: ' + email + '\n' +
            'Teléfono: ' + telefono + '\n' +
            'Asunto: ' + asunto + '\n' +
            'Mensaje: ' + mensaje;

        // Enviamos el correo electrónico a través de una petición AJAX
        $.ajax({
            url: 'https://smtpjs.com/v3/smtp.js',
            type: 'POST',
            data: {
                to: destinatario,
                from: email,
                subject: asuntoCorreo,
                body: cuerpoCorreo
            },
            success: function () {
                alert('El correo electrónico se ha enviado correctamente');
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert('Hubo un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde');
            }
        });
    });
});

$(document).ready(function () {
    $('#btnDescargar').on('click', function (e) {
        e.preventDefault(); // Evita que se envíe el formulario de manera predeterminada

        // Crea un enlace temporal que apunte al archivo que deseas descargar
        var enlaceTemporal = document.createElement('a');
        enlaceTemporal.href = '../cv.txt'; // 
        enlaceTemporal.download = 'cv.txt'; // 

        // Agrega el enlace temporal al documento y haz clic en él para iniciar la descarga
        document.body.appendChild(enlaceTemporal);
        enlaceTemporal.click();
        document.body.removeChild(enlaceTemporal);
    });
});


