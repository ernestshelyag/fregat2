// preloader

$(window).on('load', function () {
  $('#preloader').fadeOut();
});

// ### common ###

// tabs
$('[data-tab]').on('click', function () {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    $('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
});
// num spaces
function numSpaces(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

// ### pages ###

$(function () {

  header();
  aboutSlider();
  sendForm();
  modals();
  pickFlat();
  select();
  courseSliders();
  calc();
  works();
  review();
  usefullinfo();
  aboutPage();
  questions();

  svg4everybody();

});
