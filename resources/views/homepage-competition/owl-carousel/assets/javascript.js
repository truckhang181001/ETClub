var owl = $('.owl-carousel');
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
   responsive : {
    0 : {
        stagePadding: 0,
        margin: 30,
        dotsEach: false
    },
    600:{
        margin: 50,
    },
    1024: {
       stagePadding: 159
    }
}
});