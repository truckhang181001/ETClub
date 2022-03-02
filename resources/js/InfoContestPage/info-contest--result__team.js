//Xử lý khi bấm icon drop-down
$('.arrow-1').click(function () {
    $('.arrow-1').toggleClass("rotate");
    $('.name-1').toggleClass("z-index");
    $('.avatar-1').toggleClass("z-index");
    $('.name-info-1').toggleClass("display");
    $('.gold').toggleClass("blur");
    $('.copper').toggleClass("blur");
    $('.center').toggleClass("blur");
});