$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 900
  });
});

// carousel-team

$('.carousel-team').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 700
  });