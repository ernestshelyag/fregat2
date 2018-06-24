function works() {

    let works = new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.works__btn-next',
            prevEl: '.works__btn-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    $('.works__img-list').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'my-mfp-animate',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

}