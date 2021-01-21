$(document).ready(function(){
    // Collapse Bootstrap Hamburger Menu On Link Click
    $('.navbar-toggler').on('click', function () {
        $('.animatedIcon').toggleClass('open');
    });
    $('.navbar-nav >li >a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.animatedIcon').removeClass('open');
    });
    // Smooth Scroll Function For Header Navigtion Item
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });
    // Scroll To Top Function
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 5) {
            $(scrollTop).css("opacity", "1");
            $('#header .navbar').addClass('scrolled')
        } else {
            $(scrollTop).css("opacity", "0");
            $('#header .navbar').removeClass('scrolled')
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 300);
        return false;
    });
})