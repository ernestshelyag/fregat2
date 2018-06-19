function pickFlat() {

    // ### ui-sliders ###

    // floor
    $('#slider-floor').slider({
        range: true,
        min: 1,
        max: 25,
        values: [ 4, 16 ],
        slide: function( event, ui ) {
            $( '#min-floor' ).val(ui.values[0]);
            $( '#max-floor' ).val(ui.values[1]);
        }
    });
    $('#min-floor').val($('#slider-floor').slider('values', 0));
    $('#max-floor').val($('#slider-floor').slider('values', 1));
    $('#slider-floor').draggable();

    // area
    $('#slider-area').slider({
        range: true,
        min: 10,
        max: 100,
        values: [ 60, 80 ],
        slide: function( event, ui ) {
            $( '#min-area' ).val(ui.values[0]);
            $( '#max-area' ).val(ui.values[1]);
        }
    });
    $('#min-area').val($('#slider-area').slider('values', 0));
    $('#max-area').val($('#slider-area').slider('values', 1));
    $('#slider-area').draggable();

    // price
    function num(n) {
        n += "";
        n = new Array(4 - n.length % 3).join("U") + n;
        return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }
    $('#slider-price').slider({
        range: true,
        min: 2000000,
        max: 100000000,
        step: 1000000,
        values: [ 3000000, 90000000 ],
        slide: function( event, ui ) {
            $( '#min-price' ).val(num(ui.values[0]));
            $( '#max-price' ).val(num(ui.values[1]));
        }
    });
    $('#min-price').val(num($('#slider-price').slider('values', 0)));
    $('#max-price').val(num($('#slider-price').slider('values', 1)));
    $('#slider-price').draggable();

    // ### others ###

    // custom scrollbar

    $('.pick-param__scroll-content').scrollbar({
        "autoScrollSize": false,
        "scrolly": $('.my-custom-scrollbar')
    });

    // ..







}
