// GSAP Animations 
document.addEventListener('DOMContentLoaded', () => {
    // Hero animations
    gsap.from(".animate-hero", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animate Small Projects Table
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".projects-table:not(.big-projects-table) tr", {
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".projects-table:not(.big-projects-table)",
            start: "top 80%"
        }
    });

    // Animate Big Projects Table
    gsap.from(".big-projects-table tr", {
        duration: 0.8,
        x: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".big-projects-table",
            start: "top 80%"
        }
    });
});
