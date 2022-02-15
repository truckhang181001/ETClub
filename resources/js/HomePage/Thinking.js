$('.owl-carousel').owlCarousel({
    dotsEach:true,
    loop:false,
    nav:false,
    items:3,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3
        }
    }
})