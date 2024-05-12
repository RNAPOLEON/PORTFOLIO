document.getElementById('btnDescargar').onclick = function() {
    descargarPDF();
};

function descargarPDF() {

    var pdfURL = './img/RomanoCv.pdf';

    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'romanocv.pdf'; 

    link.click();
}
let headerbar = document.querySelector('.headerbar');
let nav = document.querySelector(' .nav');
let main = document.querySelector(' .main');
let banner = document.querySelector(' .banner');
let toggle = document.querySelector('.toggle');
let contentenedor = document.querySelector(' .contentenedor');
let inicio = document.querySelector(' .inicio');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    headerbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
    banner.classList.toggle('active');
    contentenedor.classList.toggle('active');
    inicio.classList.toggle('active');
}