function usefullinfo() {

    $('.usefull-info__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.usefull-info__arrs',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arr-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/arr-next.svg"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
}