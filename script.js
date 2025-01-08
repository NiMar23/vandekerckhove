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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    function setActive(link) {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            setActive(this);

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });
});
