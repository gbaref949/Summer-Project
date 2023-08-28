window.onload = function () {
  var links = document.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      window.location.href = this.href;
    };
  }
};
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.onclick = function () {
  body.classList.toggle('dark-mode');
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
