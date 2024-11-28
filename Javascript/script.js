const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-top');

    } else {
        navbar.classList.remove('fixed-top');
    }
});
