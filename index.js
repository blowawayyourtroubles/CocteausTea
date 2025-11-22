const barras = document.getElementById('barras');
const navMenu = document.querySelector('.navbar-list');   
const body = document.body;
const navLinks = document.querySelectorAll('.nav-item'); 

// Toggle Menu
barras.addEventListener('click', () => {
  barras.classList.toggle('fa-bars');
  barras.classList.toggle('fa-xmark'); // Switches icon to 'X'
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    barras.classList.add('fa-bars');
    barras.classList.remove('fa-xmark');
    navMenu.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});