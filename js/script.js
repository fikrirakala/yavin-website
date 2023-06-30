// Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  window.addEventListener("scroll", function () {
    if (this.scrollY > 100) {
      navbar.classList.add("navbar-sticky");
      toTopBtn.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticky");
      toTopBtn.classList.remove("show");
    }
  });

  toTopBtn.addEventListener("click", scrollToTop);
}

// Scroll to top
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", userScroll);
