//////////////Projects' cards sliding opening animation/////////////////////
$(document).ready(function () {
  // link action
  $(".action").click(function (e) {
    e.preventDefault();

    $(".slide").removeClass("active");
    var slide = $(this).closest(".slide");
    slide.addClass("active");
  });
});

// checkWidth
checkWidth = function () {
  var windowsize = $(window).width();
  if (windowsize > 480) {
    var slideWidth = $(".active").width();
    $(".slide-content").css({
      width: slideWidth + "px",
    });
  }
};

$(window).resize(function () {
  // onresize
  checkWidth();

  // finish resize
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout(checkWidth, 500);
});

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

// $(".added").each(function () {
//   var link = $(this).html();
//   $(this).contents().wrap('<a href="https://github.com/lpatino1"></a>');
// });
