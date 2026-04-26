const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycLSyYKWXVhtE5wkQreKiswZiSI0If2rPssoOuaa3B3nJcxm8XnfhvlhliysODrTxtIQ/exec';
const APP_SECRET = 'e42ffaa2-fe19-49cc-9892-f981316cbd4a';

let contact_us = {
    ready: function () {
        // Attach submit event listener using native addEventListener
        document.addEventListener('submit', function(event) {
            if (event.target && event.target.id === 'contactForm') {
                contact_us.submit_contact_us(event);
            }
        });
    },

    submit_contact_us: function (event) {
        event.preventDefault();
        const form = event.target;

        // Set values for hidden fields
        const secretInput = document.getElementById('secret');
        const originInput = document.getElementById('origin');

        if (secretInput) secretInput.value = APP_SECRET;
        if (originInput) originInput.value = window.location.origin;

        // Use URLSearchParams to replicate jQuery's .serialize()
        const formData = new URLSearchParams(new FormData(form)).toString();

        // Perform the Submission
        contact_us.perform_submission(formData, form);
    },

    loader: function (show = false) {
        const loader = document.getElementById('loader');
        if (!loader) return;

        if (show) {
            loader.classList.remove('hidden');
        } else {
            loader.classList.add('hidden');
        }
    },

    perform_submission: async function (formData, form) {
        try {
            contact_us.loader(true);
            const response = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            const result = await response.json();

            if (response.ok && result.status === 'SUCCESS') {
                contact_us.notify('✅ Success! Your message has been sent.', true);
            } else {
                throw new Error(result.message || 'Server error');
            }
        } catch (error) {
            contact_us.notify('❌ Failed to send message: ' + error.message, false);
        } finally {
            form.reset();
            contact_us.loader(false);

            // Clear hidden fields manually if they aren't part of form.reset()
            const secretInput = document.getElementById('secret');
            const originInput = document.getElementById('origin');
            if (secretInput) secretInput.value = '';
            if (originInput) originInput.value = '';
        }
    },

    notify: function (message, isSuccess) {
        const messageBox = document.getElementById('form-message');
        if (!messageBox) return;

        const className = isSuccess ? 'text-green-600' : 'text-red-600';

        messageBox.classList.add(className, 'font-semibold');
        messageBox.classList.remove('hidden');
        messageBox.textContent = message;

        setTimeout(() => {
            messageBox.classList.add('hidden');
            messageBox.classList.remove(className, 'font-semibold');
        }, 5000);
    },
};

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', contact_us.ready);