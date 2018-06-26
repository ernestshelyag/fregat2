function lookFlat() {

    let lookFlat = new Swiper('.look-flat-modal__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.look-flat-modal__btn-next',
            prevEl: '.look-flat-modal__btn-prev',
        }
        // breakpoints: {
        //     1200: {
        //         slidesPerView: 4
        //     },
        //     500: {
        //         slidesPerView: 2,
        //         spaceBetween: 20
        //     }
        // }
    });

}