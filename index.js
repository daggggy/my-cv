new fullpage('#main', {
  autoScrolling: false,
  navigation: true,
  navigationTooltips: ['Home', 'About Me', 'Education', 'Work Experience', 'Skill', 'Hobbies', 'Contact Me'],
  scrollingSpeed: 1500,
});

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  $(this).scrollTop(0);
});

window.addEventListener("load", function() {
  var loader = document.querySelector(".loader");
  loader.className += " hidden";
});

ScrollOut();

AOS.init();
