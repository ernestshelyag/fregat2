function sendForm() {

    let phonePattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;

    $('.inputmask').inputmask({
        mask: '+7(999)999-99-99',
        showMaskOnHover: false
    });
    $('.inputmask').on('input', function () {
        if (phonePattern.test($(this).val())) {
            $(this).removeClass('form-err');
        }
    });

    $('.form-callback').submit(function (e) {
        let phone = $(this).find('.inp');
        let errorFlag = false;
        let data = $(this).serialize();
        let validatePhone = () => {
            return (phonePattern.test(phone.val()))
        };
        e.preventDefault();
        if (!validatePhone(phone) || phone.val() === '') {
            phone.addClass('form-err');
            errorFlag = true;
        } else {
            errorFlag = false;
        }
        if (!errorFlag) {
            $.ajax({
                url: this.dataset.url,
                type: "post",
                data: data,
                success: function () {
                    $(this)[0].reset();
                    modalSuccess();
                }
            });
        }
    });

}