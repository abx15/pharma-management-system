import { showToast, validateEmail, validatePhone } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const addCustomerBtn = document.getElementById('add-customer-btn');
    const customerModal = document.getElementById('customer-modal');
    const cancelCustomer = document.getElementById('cancel-customer');
    const saveCustomer = document.getElementById('save-customer');

    if (addCustomerBtn && customerModal) {
        addCustomerBtn.addEventListener('click', () => {
            customerModal.classList.remove('hidden');
        });
    }

    if (cancelCustomer && customerModal) {
        cancelCustomer.addEventListener('click', () => {
            customerModal.classList.add('hidden');
        });
    }

    if (saveCustomer) {
        saveCustomer.addEventListener('click', () => {
            const name = document.getElementById('customer-name').value;
            const phone = document.getElementById('customer-phone').value;
            const email = document.getElementById('customer-email').value;
            const address = document.getElementById('customer-address').value;

            if (!name || !phone) {
                showToast('Name and phone are required', 'error');
                return;
            }

            if (!validatePhone(phone)) {
                showToast('Please enter a valid phone number', 'error');
                return;
            }

            if (email && !validateEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }

            console.log('Saving customer:', { name, phone, email, address });
            showToast('Customer added successfully', 'success');
            customerModal.classList.add('hidden');
            document.getElementById('customer-form').reset();
        });
    }
});
