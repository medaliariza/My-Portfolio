document.addEventListener("DOMContentLoaded", function () {

    // ===== Smooth Scroll for Button =====
    window.scrollToSection = function (id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    // ===== Scroll Reveal Animation =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    const elements = document.querySelectorAll(".section, .project-card, .skill");

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
