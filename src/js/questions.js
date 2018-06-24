function questions() {

    $('body').on('click', '.questions li', function () {
        // -
        $('.questions li').not($(this)).removeClass('active');
        $('.questions figure').slideUp(400);
        // -
        if ($(this).hasClass('active')) {
            $('.questions li').removeClass('active');
            $('.questions figure').slideUp(400);
        } else {
            $(this).addClass('active');
            $(this).children('figure').slideDown(400);
        }
    });


}