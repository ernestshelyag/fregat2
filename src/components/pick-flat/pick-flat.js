function pickFlat() {

    let index1 = $('#slider1'),
        input1 = $('input[name="inp1"]');
    index1.slider({
        value: 0.0625,
        min: 0.01,
        max: 0.1,
        step: 0.0001,
        slide: function (event, ui) {
            input1.val(ui.value);
        }
    });
    input1.val(index1.slider('value'));
    index1.draggable();
    input1.on('change keyup', function () {
        var boardInput = $(this) ,
            value = boardInput.val(),
            maxVal = 0.1,
            minVal = 0.01;
        if(value.length > 8) {
            value = parseFloat(value).toFixed(6);
            boardInput.val(value);
        }
        index1.slider('value', value);
        if (+value > maxVal) {
            boardInput.val(maxVal);
        } else if (+value < minVal) {
            setTimeout ( function () {
                if(boardInput.val()<minVal) {
                    boardInput.val(minVal);
                }
            }, 3000);
        }
    });

}