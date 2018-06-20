function works() {

    $('.works__slider-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        appendArrows: '.works__arrs',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arr-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src="img/arr-next.svg"></button>'
    });

}