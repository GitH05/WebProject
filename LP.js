alert("Landing Page")
// JavaScript for changing style on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-active', window.scrollY > 0);
});

// JavaScript for changing style on hover
var navLinks = document.querySelectorAll('#main-nav ul li a');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555';
        this.style.color = '#fff';
    });

    navLink.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
