const fadeInElements = document.querySelectorAll('.fade-in');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function fadeInOnScroll() {
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

fadeInOnScroll();


