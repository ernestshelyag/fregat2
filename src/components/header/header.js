function header () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70 && $(window).width() > 880) {
            $('.header-top').slideUp();
            $('.header').addClass('active');
        }
        else {
            $('.header-top').slideDown();
            $('.header').removeClass('active');
        }
        // -
        if ($(window).scrollTop() > 70 && $('.sidebar').hasClass('active')) {
            $('#burger-btn').click();
        }
        // -
        if ($(window).scrollTop() + $(window).height() >= $(document).height()){
            $('.header').not('.in-footer').hide();
        } else {
            $('.header').not('.in-footer').show();
        }
    });
    // - - - - -
    if ($(window).scrollTop() > 70 && $(window).width() > 880) {
        $('.header-top').hide();
        $('.header').addClass('active');
    }
    $('#burger-btn').click(function () {
        $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
    });
    $('.sidebar').click(function () {
        $('#burger-btn').click();
    });
}

