function aboutSlider() {
    $('.about-slider__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.about-slider__arrs',
        prevArrow: '<button type="button" class="slick-prev">' +
        '             <svg class="arr-prev">\n' +
        '               <use xlink:href="img/sprite.svg#arr-prev"></use>\n' +
        '             </svg>' +
        '           </button>',
        nextArrow: '<button type="button" class="slick-prev">' +
        '             <svg class="arr-next">\n' +
        '               <use xlink:href="img/sprite.svg#arr-next"></use>\n' +
        '             </svg>' +
        '           </button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode:true,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    slidesToShow: 3,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
