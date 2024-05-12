let headerbar = document.querySelector('.headerbar');
        let nav = document.querySelector(' .nav');
        let main = document.querySelector(' .main');
        let banner = document.querySelector(' .banner');
        let toggle = document.querySelector('.toggle');
        let hero = document.querySelector(' .hero');
        let images = document.querySelector(' .images');
        let detel = document.querySelector(' .detel');
        let herotexto1 = document.querySelector(' .hero-texto1');
        let herotexto2 = document.querySelector(' .hero-texto2');
        let sobremi = document.querySelector(' .sobremi');
        toggle.onclick = function () {
            toggle.classList.toggle('active');
            headerbar.classList.toggle('active');
            nav.classList.toggle('active');
            main.classList.toggle('active');
            banner.classList.toggle('active');
            hero.classList.toggle('active');
            images.classList.toggle('active');
            detel.classList.toggle('active');
            herotexto1.classList.toggle('active');
            herotexto2.classList.toggle('active');
            sobremi.classList.toggle('active');

        }