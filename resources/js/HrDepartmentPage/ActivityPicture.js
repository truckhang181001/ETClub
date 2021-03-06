var owl = $('.owl-carousel-activity-picture');
owl.owlCarousel({
    nav: true,
    items:1,
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    stagePadding: 0,
   responsive : {
    0 : {
        margin: 60,
        dotsEach: false,
    },
    600:{
        margin: 150,
    },
    1200: {
       stagePadding: 165
    }
}
});