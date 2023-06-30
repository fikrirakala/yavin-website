// Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
