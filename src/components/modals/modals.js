function modals () {

    $('.play').magnificPopup({
        mainClass: 'my-mfp-animate',
        removalDelay: 300,
        type: 'iframe',
        preloader: false
    });

    $('.simple-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 300,
        mainClass: 'my-mfp-animate'
    });

    $('.img-modal').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'my-mfp-animate'
    });

}
