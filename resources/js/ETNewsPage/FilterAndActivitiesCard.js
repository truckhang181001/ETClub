//Xử lý bấm nút 'Thời gian'
$('.time-cover__time').click(function () {
    $('.time-cover__option').toggleClass("display");
});
$('.drop-down-1').click(function () {
    $('.time-cover__option').toggleClass("display");
});

//Xử lý bấm nút 'Năm' và 'Tháng'
$('.year-cover .year').click(function () {
    $('.year-cover__option').toggleClass("display");
});
$('.drop-down-2').click(function () {
    $('.year-cover__option').toggleClass("display");
});

$('.month-cover .month').click(function () {
    $('.month-cover__option').toggleClass("display");
});
$('.drop-down-3').click(function () {
    $('.month-cover__option').toggleClass("display");
});

//Xử lý bấm nút 'Xem thêm'
$('.more-cover .more').click(function () {
    $('.show-more').addClass("display");
});
$('.more-cover .more').click(function () {
    $('.more-cover').addClass("display");
});