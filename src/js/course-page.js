function coursePage() {

    let courseSlider11 = new Swiper('.course-page__single-slider_1-1', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.course-page__btn-next_1-1',
            prevEl: '.course-page__btn-prev_1-1',
        },
    });
    let courseSlider12 = new Swiper('.course-page__single-slider_1-2', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.course-page__btn-next_1-2',
            prevEl: '.course-page__btn-prev_1-2',
        },
    });
    let courseSlider13 = new Swiper('.course-page__single-slider_1-3', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.course-page__btn-next_1-3',
            prevEl: '.course-page__btn-prev_1-3',
        },
    });

}