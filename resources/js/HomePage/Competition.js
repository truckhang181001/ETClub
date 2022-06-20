var owl = $(".owl-carousel__competition");
owl.owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    margin: 0,
    dotsEach: true,
    dot: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
    ],
    stagePadding: 0,
    responsive: {
        0: {
            margin: 30,
            dotsEach: false,
            loop: false,
            nav: false,
        },
        600: {
            margin: 30,
            loop: false,
            stagePadding: 0,
            nav: false,
        },
        1200: {
            stagePadding: 175,
            margin: -1,
        },
    },
});