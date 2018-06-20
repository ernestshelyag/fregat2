function review() {

    $('.review__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.review__arrs',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arr-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/arr-next.svg"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
}