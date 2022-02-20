//khi scroll chuột thì add class sticky cho navbar
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('.nav-container').addClass('sticky');
        }
        else if($(this).scrollTop(0)) {
            $('.nav-container').removeClass('sticky');
        }
    });
});

//click vào nav-link thì add class active.
$('.nav-link').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// click vào cách thẻ con của nav-link thì add class active cho nav-link đó.
$('.nav-link .more li').click(function(){
    $('.nav-link').addClass('active').siblings().removeClass('active');
});

//click vào hamburger icon thì show ra menu
var hamburgerIcon = document.getElementById('menu-list');
hamburgerIcon.onclick = function() {
    // if(hamburgerIcon.classList.contains('open') === false) {
    //     hamburgerIcon.classList.add('open');
    // }

    // if(mobileMenu.style.display == "none") {
    //     mobileMenu.style.display = "flex"
    // }
    hamburgerIcon.classList.toggle('display-block');
    mobileMenu.classList.toggle('display-block');
}

// click dấu X thì tắt menu
var closeIcon = document.getElementById('close-icon');
var mobileMenu = document.getElementById('mobile-menu');
closeIcon.onclick = function() {
    // mobileMenu.style.display = "none"
    
    mobileMenu.classList.toggle('display-block');
}

//click vào mũi tên của title-name trên bản mobile thì show ra list
var moreContainer = document.getElementById('more-container')
var expandMore = document.getElementById('expand-more');
expandMore.onclick = function() {
    moreContainer.classList.toggle('more-container__active');
}

//hover vào title name thì đổi màu các phần tử con
// var titleName = document.getElementById('title-name');
// titleName.onmouseover = function() {
//     titleName.classList.add('active-hover');
// }

// var divider = document.getElementById('divider');
// $('.title-name').mouseover(function(){
//     divider.addClass('active-hover');
// });

// $('.title-name').mouseout(function(){
//     divider.removeClass('active-hover');
// });