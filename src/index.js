///////////////Color picker for Projects' Section Background Color////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//////////////////// run Particle.js on load ////////////////////////
window.onload = function () {
  Particles.init({
    selector: ".background",
    color: ["#0071d8", "#DBEDF3", "#004e95"],
    connectParticles: true,
    sizeVariations: 4,
    speed: 0.7,
    maxParticles: 110,
  });
};
