(function($) {
    $(function() {
        // Detect touch screen and enable scrollbar if necessary
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        if (is_touch_device()) {
            $('#nav-mobile').css({
                overflow: 'auto'
            });
        }

        // Set checkbox on forms.html to indeterminate
        var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
        if (indeterminateCheckbox !== null)
            indeterminateCheckbox.indeterminate = true;

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('ul.tabs').tabs();
        $('.scrollspy').scrollSpy();
        $("#signupForm").submit(function(event) {
        	var again = $("#su_password_again");
            if ($("#su_password").val() === again.val()) {
                again.removeClass('invalid');
                again.addClass('valid');
                Materialize.toast('Passwords Matched', 3000);
                return true;
            } else {
                again.removeClass('valid');
                again.addClass('invalid');
                Materialize.toast('Passwords are not matching', 3000);
                return false;
            }
        });
        $(document).on('change', "#su_password_again", function() {
            if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
                $(this).siblings('label, i').addClass('active');
            }
            validate_password($(this));
        });
        $(document).on('blur', "#su_password_again", function() {
            if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
                $(this).siblings('label, i').addClass('active');
            }
            validate_password($(this));
        });

        $(document).on('focus', "#su_password_again", function() {
            if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
                $(this).siblings('label, i').addClass('active');
            }
            validate_password($(this));
        });


        validate_password = function(object) {
            if (object.val().length === 0) {
                if (object.hasClass('validate_pass')) {
                    object.removeClass('valid');
                    object.removeClass('invalid');
                }
            } else {
                if (object.hasClass('validate_pass')) {
                    if ($("#su_password").val() === $("#su_password_again").val()) {
                        object.removeClass('invalid');
                        object.addClass('valid');
                    } else {
                        object.removeClass('valid');
                        object.addClass('invalid');
                    }
                }
            }
        }

    }); // end of document ready
})(jQuery); // end of jQuery name space
