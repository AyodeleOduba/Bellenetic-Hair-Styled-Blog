let mainNav = document.getElementById("javascriptmenu");
let navBarToggle = document.getElementById("javascriptnavbartoggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});