var owl = $('.owl-carousel-navbar');
owl.owlCarousel({
    items:3,
    loop:false,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    dots:false,
});
$(function() {
  $(".cc-navbar__item").on("click", function(e) {  
    $('.cc-navbar__item').removeClass('active');
    $(this).addClass('active');
  });
})