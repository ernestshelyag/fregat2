function aboutSlider() {

    let aboutSlider = new Swiper('.about-slider__slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.about-slider__btn-next',
            prevEl: '.about-slider__btn-prev',
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

}
