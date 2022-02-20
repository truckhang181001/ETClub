//khi scroll chuột thì add class sticky cho navbar
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.nav-container').addClass('sticky');
        }
        else if ($(this).scrollTop(0)) {
            $('.nav-container').removeClass('sticky');
        }
    });
});

//click vào nav-link thì add class active.
$('.nav-link').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

// click vào cách thẻ con của nav-link thì add class active cho nav-link đó.
$('.nav-link .more li').click(function () {
    $('.nav-link').addClass('active').siblings().removeClass('active');
});

//xử lý bấm nào icon menu
$('#menu-mobile').click(function(){
  $('.side-bar').toggleClass("show");
});
// xử lý bấm vào icon close
$('.icon-close').click(function(){
  $('.side-bar').toggleClass("show");
});

$('.intro-btn').click(function(){
  $('nav ul .intro-show').toggleClass("show1");
});
$('.tech-btn').click(function(){
  $('nav ul .tech-show').toggleClass("show2");
});
$('.competition-btn').click(function(){
    $('nav ul .competition-show').toggleClass("show3");
  });
$('nav ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});