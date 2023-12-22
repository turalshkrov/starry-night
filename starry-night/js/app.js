const navbarToggleButtons = document.querySelectorAll(".nav-toggle");
const navMenu = document.querySelectorAll(".nav-expand");

navbarToggleButtons.forEach(button => {
  const expandNavbarId = button.getAttribute("expand-target");
  const expandNavbar = document.getElementById(expandNavbarId);

  button.addEventListener("click", () => {
    expandNavbar.classList.toggle("nav-expand");
  })
});

navMenu.forEach(menu => {
  menu.classList.remove("nav-expand");
});