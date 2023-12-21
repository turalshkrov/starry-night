const navbarToggleButton = document.getElementById("nav-toggle");
const navbarExpand = document.getElementById("nav-menu");

navbarToggleButton.addEventListener('click', () => {
  navbarExpand.classList.toggle('nav-expand');
})
navbarExpand.classList.remove('nav-expand');