document.addEventListener('DOMContentLoaded', () => {

    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navLinks = document.getElementById('nav-links');

    menuHamburguer.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu-active');
    });

    const linksDoMenu = navLinks.querySelectorAll('a');
    
    linksDoMenu.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile-menu-active')) {
                navLinks.classList.remove('mobile-menu-active');
            }
        });
    });

});