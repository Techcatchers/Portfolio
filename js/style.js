// Navbar color change on scroll
document.addEventListener('scroll', () => {
    var nav = document.querySelector(".navbar-fixed-top");
    if (window.pageYOffset > 15) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Live Projects
(() => {
    fetch('./data/live_projects.json')
    .then(res => res.json())
    .then(response => liveProjects(response))
    .catch(err => console.log(err));
})();

// Freelance Work
(() => {
    fetch('./data/freelance_work.json')
    .then(res => res.json())
    .then(response => freelanceWork(response))
    .catch(err => console.log(err));
})();