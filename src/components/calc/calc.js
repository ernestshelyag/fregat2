function calc() {

    // ### controllers ###

    // price
    $('#slider-calc-price').slider({
        range: 'min',
        min: 2000000,
        max: 100000000,
        step: 1000000,
        value: 50000000,
        slide: function( event, ui ) {
            $('#calc-price').val(numSpaces(ui.value));
        }
    });
    $('#calc-price').val(numSpaces($('#slider-calc-price').slider('value')));
    $('#slider-calc-price').draggable();

    // percent
    $('#slider-calc-percent').slider({
        range: 'min',
        min: 4,
        max: 30,
        value: 10,
        slide: function( event, ui ) {
            $('#calc-percent').val(ui.value + ' %');
        }
    });
    $('#calc-percent').val($('#slider-calc-percent').slider('value') + ' %');
    $('#slider-calc-percent').draggable();

    // contribution
    $('#slider-calc-cont').slider({
        range: 'min',
        min: 2000000,
        max: 100000000,
        step: 1000000,
        value: 50000000,
        slide: function( event, ui ) {
            $('#calc-cont').val(numSpaces(ui.value));
        }
    });
    $('#calc-cont').val(numSpaces($('#slider-calc-cont').slider('value')));
    $('#slider-calc-cont').draggable();

    // percent
    $('#slider-calc-time').slider({
        range: 'min',
        min: 1,
        max: 30,
        value: 5,
        slide: function( event, ui ) {
            $('#calc-time').val(ui.value + ' лет');
        }
    });
    $('#calc-time').val($('#slider-calc-time').slider('value') + ' лет');
    $('#slider-calc-time').draggable();

    // ### calc ###





}