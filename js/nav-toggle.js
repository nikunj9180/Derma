const tbtn = document.getElementById('nav-toggle');
const nlnk = document.getElementById('nav-link');
const nav = document.getElementById('nav');

tbtn.addEventListener('click', () => {
nlnk.classList.toggle("active");
nav.classList.toggle("active");
});