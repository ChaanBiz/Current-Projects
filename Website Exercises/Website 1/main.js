window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navBar = document.querySelector('.navbar');
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('active');
}

