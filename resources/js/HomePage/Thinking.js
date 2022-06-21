$('.owl-carousel-thinking').owlCarousel({
    dotsEach:true,
    loop:false,
    nav:false,
    margin:20,
    responsive: {
        0: {
            items: 1,
            dots:false
        },
        600: {
            items: 1,
            dots: false
        },
        800: {
            items: 1,
            dots:true
        },
        1000: {
            items: 2,
        },
        1440: {
            items:3,
        }
    }
})