function courseSliders() {
    
    for (let i = 1; i < 11 ; i++) {

        let sliderTop = '.course-sliders__slider-top_' + i;
        let sliderBottom = '.course-sliders__slider-bottom_' + i;

        $(sliderTop).slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            asNavFor: '.course-sliders__slider-bottom_' + i,
            appendArrows: '.course-sliders__arrs_' + i,
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
        $(sliderBottom).slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            arrows: false,
            asNavFor: '.course-sliders__slider-top_' + i,
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

}