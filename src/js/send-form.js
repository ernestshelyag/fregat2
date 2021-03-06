function sendForm() {

    // let phonePattern = /^\d/;

    function modalSuccess () {
        $.magnificPopup.open({
            removalDelay: 300,
            mainClass: 'my-mfp-animate',
            items: {
                src: '#success-popup'
            }
        });
        function fun() {
            $.magnificPopup.close({
                items: {
                    src: '#success-popup'
                }
            });
        }
        setTimeout(fun, 2000);
    }

    $('.inp-text, .inputmask').on('input', function () {
        $(this).removeClass('form-err');
    });

    // $('.inputmask').inputmask({
    //     mask: '+7(999)999-99-99',
    //     showMaskOnHover: false
    // });

    $('.inputmask').on('keyup', function () {

        let v = $(this).val(),
            r = v.replace(/[^\[0-9]*/giu, '');
        $(this).val(r);

    });

    // callback form

    $('.form-callback').submit(function (e) {
        let phone = $(this).find('.inp');
        let errorFlag = false;
        let data = $(this).serialize();

        e.preventDefault();
        if (phone.val() === '') {
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

    // review form

    $('.form-review').submit(function (e) {
        let name = $(this).find('.inp');
        let review = $(this).find('.textarea');
        let errorFlag = false;
        let data = $(this).serialize();
        e.preventDefault();
        if (name.val() === '') {
            name.addClass('form-err');
            errorFlag = true;
        } else if (review.val() === ''){
            review.addClass('form-err');
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

    // contact page form

    $('.contacts-page-form').submit(function (e) {
        let name = $(this).find('.inp-text');
        let phone = $(this).find('.inputmask');
        let validatePhone = () => {
            return (phonePattern.test(phone.val()))
        };

        let errorFlag = false;
        let data = $(this).serialize();
        e.preventDefault();
        if (name.val() === '') {
            name.addClass('form-err');
            errorFlag = true;
        } else if (!validatePhone(phone) || phone.val() === '') {
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

    // review form

    $('.form-mail').submit(function (e) {
        let mail = $(this).find('.inp');
        let errorFlag = false;
        let data = $(this).serialize();
        e.preventDefault();
        if (mail.val() === '') {
            mail.addClass('form-err');
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