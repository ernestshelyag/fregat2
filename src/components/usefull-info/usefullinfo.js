function usefullinfo() {

    let usefullinfo = new Swiper('.usefull-info__slider', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.usefull-info__btn-next',
            prevEl: '.usefull-info__btn-prev',
        },
    });
    
}