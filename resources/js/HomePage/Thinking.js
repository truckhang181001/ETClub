$('.owl-carousel').owlCarousel({
    dotsEach:true,
    loop:false,
    nav:false,
    items:3,
    responsive: {
        0: {
            items: 1,
            dots:false
        },
        768: {
            items: 1,
            dots:false
        },
        1024: {
            items: 2,
        },
        1440: {
            items: 3
        }
    }
})