const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycLSyYKWXVhtE5wkQreKiswZiSI0If2rPssoOuaa3B3nJcxm8XnfhvlhliysODrTxtIQ/exec';
const APP_SECRET = 'e42ffaa2-fe19-49cc-9892-f981316cbd4a';

let contact_us = {
    ready: function () {
        // Attach submit event listener using jQuery
        $(document).on('submit', '#contactForm', contact_us.submit_contact_us);
    },

    submit_contact_us: function (event) {
        event.preventDefault();
        let origin = location.origin;
        $('#secret').val(APP_SECRET);
        $('#origin').val(origin);
        const $form = $('#contactForm');

        // Get form data using jQuery's serialize
        const formData = $form.serialize();

        // 2. Perform the Submission
        contact_us.perform_submission(formData, 0);
    },

    loader: function (show = false) {
        if (show) {
            $('#loader').removeClass('hidden');
        } else {
            $('#loader').addClass('hidden');
        }
    },

    perform_submission: async function (formData) {
        try {
            contact_us.loader(true)
            const response = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.ok) {
                const result = await response.json();
                if (result.status === 'SUCCESS') {
                    contact_us.notify('✅ Success! Your message has been sent.', true);
                } else {
                    throw new Error(result.message || 'Server error');
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            contact_us.notify('❌ Failed to send message: ' + error.message, false);
        } finally {
            $('#contactForm')[0].reset();
            contact_us.loader(false)
            $('#secret').val('');
            $('#origin').val('');
        }
    },

    /**
     * Function used to show notifications to the user
     */
    notify: function (message, isSuccess) {
        let messageBox = $('#form-message');
        let className = isSuccess ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold';
        messageBox.addClass(className);
        messageBox.removeClass('hidden');
        messageBox.text(message);
        setTimeout(() => {
            $('#form-message').addClass('hidden');
        }, 5000);
    },
};

// Initialize when DOM is ready
$(document).ready(function () {
    contact_us.ready();
});