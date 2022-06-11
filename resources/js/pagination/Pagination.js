$('.pagination-item').click(function() {
    $(this).addClass('pagination-item--active').siblings().removeClass('pagination-item--active')
})