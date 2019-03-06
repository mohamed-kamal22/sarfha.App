$(document).ready(function(){

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 300) {
            $('.scrollTop').fadeIn()
        } else {
            $('.scrollTop').fadeOut()
        }
    });

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });

});


