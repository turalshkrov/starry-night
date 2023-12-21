const navbarToggleButton = document.getElementById("nav-toggle-button");
const navbarExpand = document.getElementById("nav-expand");

navbarToggleButton.addEventListener('click', () => {
  if (!navbarExpand.classList.contains('nav-expand')) {
    navbarExpand.classList.add('nav-expand');
  } else {
    navbarExpand.classList.remove('nav-expand');
  }
})