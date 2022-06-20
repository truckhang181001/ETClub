$('.owl-carousel__thinking').owlCarousel({
    dotsEach:true,
    loop:false,
    nav:false,
    items:3,
    responsive: {
        0: {
            items: 1,
            dots:false
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3
        }
    }
})