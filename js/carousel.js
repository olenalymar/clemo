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
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });




//scrolling

$('nav a').on('click', function(event) {
 event.preventDefault();
 var id = $(this).attr('href')
 $('html, body')
   .stop()
   .animate({
     scrollTop: $(id).offset().top
   });
});