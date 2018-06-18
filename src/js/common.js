function common() {

    // tabs

    $('[data-tab]').on('click', function () {
        $(this).addClass('active').siblings('[data-tab]').removeClass('active');
        $('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
    });

}