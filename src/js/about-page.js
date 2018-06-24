function aboutPage() {

    let history = new Swiper('.history__slider', {
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    let certificate = new Swiper('.certificate__slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.certificate__btn-next',
            prevEl: '.certificate__btn-prev',
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