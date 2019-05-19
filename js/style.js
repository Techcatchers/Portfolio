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


// Skills
(() => {
    fetch('./data/skills.json')
    .then(res => res.json())
    .then(response => skills(response))
    .catch(err => console.log(err));
})();


// Skills Animation
setTimeout(() => {
    const targets = document.querySelectorAll('.progress-bar');
    
    // configure the intersection observer instance
    const intersectionObserverOptions = {
        root: null,
        rootMargin: '150px',
        threshold: 1.0
    }
    
    targets.forEach(target => {
        
        const onIntersection = (entries) => {
            //   console.log(entries)
            entries.forEach(entry => {
                target.classList.toggle('skill-visible', entry.intersectionRatio > 0);
            
                // Are we in viewport?
                if (entry.intersectionRatio > 0) {
                    // Stop watching 
                    observer.unobserve(entry.target);
                }
            });
        }
        
        const observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);
        
        // provice the observer with a target
        observer.observe(target);
    });
    
}, 2000);


// My Blogs Section
(() => {
    fetch('./data/blogs.json')
    .then(res => res.json())
    .then(response => blogs(response))
    .catch(err => console.log(err));
})();