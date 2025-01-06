document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Toggle class on hamburger menu
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('open');
            hamburgerMenu.classList.remove('open'); // Remove class from hamburger menu
        });
    });
});
