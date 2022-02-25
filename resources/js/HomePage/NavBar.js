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

$('.background-blur').click(function(){
  $('.side-bar').toggleClass("show");
});


//Xử lý show ra danh sách con
$('.intro-btn').click(function(){
  $('nav ul .intro-show').toggleClass("show1");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.intro-show').addClass('visible');
});
$('.tech-btn').click(function(){
  $('nav ul .tech-show').toggleClass("show2");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.tech-show').addClass('visible');
});
$('.competition-btn').click(function(){
  $('nav ul .divider-4').toggleClass("toggle-color");
  $('nav ul .competition-show').toggleClass("show3");
  $('.icon-close').addClass('invisible');
  $('.side-bar__menu').addClass('invisible');
  $('.competition-show').addClass('visible');
});
$('nav ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});

//Xử lý bấm nút quay lại menu
$('#previous-1').click(function(){
  $('nav ul .intro-show').toggleClass("show1");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-2').toggleClass("toggle-color");
});
$('#previous-2').click(function(){
  $('nav ul .tech-show').toggleClass("show2");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-3').toggleClass("toggle-color");
});
$('#previous-3').click(function(){
  $('nav ul .competition-show').toggleClass("show3");
  $('.icon-close').removeClass('invisible');
  $('.side-bar__menu').removeClass('invisible');
  $('nav ul .divider-4').toggleClass("toggle-color");
});

//Xử lý đổi màu cho divider
$('.homepage-btn').click(function(){
  $('nav ul .divider-1').toggleClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.intro-btn').click(function(){
  $('nav ul .divider-2').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.tech-btn').click(function(){
  $('nav ul .divider-3').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.competition-btn').click(function(){
  $('nav ul .divider-4').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-5').removeClass("toggle-color");
});
$('.CTV-btn').click(function(){
  $('nav ul .divider-5').toggleClass("toggle-color");
  $('nav ul .divider-1').removeClass("toggle-color");
  $('nav ul .divider-2').removeClass("toggle-color");
  $('nav ul .divider-3').removeClass("toggle-color");
  $('nav ul .divider-4').removeClass("toggle-color");
});