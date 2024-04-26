/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
var btnReservar = document.getElementById("reservar");

// Agregar evento onclick
btnReservar.onclick = function() {
    // Mostrar alerta
    alert("Su reserva ha sido completada");
};

function reserva() {
    alert("¡Hola! Has hecho clic en el botón.");
}

// Asocia el evento onclick al botón cuando el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    var miFormulario = document.getElementById("contactForm");

    // Habilita el formulario
    miFormulario.disabled = false;

    // Obtiene el botón por su ID
    var miBoton = document.getElementById("submitButton");
    miBoton.disabled = false;
    miBoton.removeAttribute("disabled")

    // Asocia la función miFuncion al evento onclick del botón
    miBoton.onclick = function() {
        reserva();
    };
});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
