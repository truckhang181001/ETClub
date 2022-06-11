
$(document).ready(function() {
    $(".container-term").click(function () {
    $(".term-category").toggle()
 });
 });
 $(function() {
    $(".term-item").on("click", function(e) {  
        $('.term-item').removeClass('active')
        $(this).addClass('active')
    });

  })
