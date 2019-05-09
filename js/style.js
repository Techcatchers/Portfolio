// Navbar color change on scroll
document.addEventListener('scroll', () => {
    var nav = document.querySelector(".navbar-fixed-top");
    if (window.pageYOffset > 15) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});