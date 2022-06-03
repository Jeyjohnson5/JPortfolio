const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav_list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
