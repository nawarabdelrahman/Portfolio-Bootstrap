const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const btnTop = document.getElementById("btn-top");
const sections = document.querySelectorAll("section[id]");

// Helper functions to toggle class
function toggleClass(element, className, condition) {
  if (!element) return;

  if (condition) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function arrayRemoveclass(arr, className) {
  arr.forEach((ele) => {
    toggleClass(ele, className, false);
  });
}

// Change Navbar Background
function scrollHeader() {
  toggleClass(navbar, "nav-scrolled", window.scrollY >= 50);
}

window.addEventListener("scroll", scrollHeader);

// Add Active Class to Navbar Links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    arrayRemoveclass(navLinks, "active");
    toggleClass(link, "active", true);

    toggleClass(document.querySelector(".navbar-collapse"), "show", false);

    const navbarToggler = document.querySelector(".navbar-toggler");

    if (navbarToggler) {
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });
});

// Show Back to Top Button
function showBtnTop() {
  toggleClass(btnTop, "show", window.scrollY >= 100);
}

window.addEventListener("scroll", showBtnTop);

// Form Validation
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();