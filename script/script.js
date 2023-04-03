/** @format */
// Make mobile navigation work :
const btnNavEl = document.querySelector(".header__btn--mobile");
let headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});




// Smooth scrolling animation :
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top :
    if (href === "#") { 
      window.scrollTo({ 
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links :
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation :
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});