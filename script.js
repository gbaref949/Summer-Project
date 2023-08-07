window.onload = function() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      window.location.href = this.href;
    };
  }
};
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.querySelector("body");
// const main = document.querySelector("main");
// const footer = document.querySelector("footer");

darkModeToggle.onclick = function() {
  body.classList.toggle("dark-mode");
  // main.classList.toggle("dark-mode");
  // footer.classList.toggle("dark-mode");
};