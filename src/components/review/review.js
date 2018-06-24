function review() {

    let review = new Swiper('.review__slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.review__btn-next',
            prevEl: '.review__btn-prev',
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