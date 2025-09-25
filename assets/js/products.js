import { showToast } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const addProductBtn = document.getElementById('add-product-btn');
    const productModal = document.getElementById('product-modal');
    const cancelProduct = document.getElementById('cancel-product');
    const saveProduct = document.getElementById('save-product');

    if (addProductBtn && productModal) {
        addProductBtn.addEventListener('click', () => {
            productModal.classList.remove('hidden');
        });
    }

    if (cancelProduct && productModal) {
        cancelProduct.addEventListener('click', () => {
            productModal.classList.add('hidden');
        });
    }

    if (saveProduct) {
        saveProduct.addEventListener('click', () => {
            const name = document.getElementById('product-name').value;
            const brand = document.getElementById('product-brand').value;
            const batch = document.getElementById('product-batch').value;
            const expiry = document.getElementById('product-expiry').value;
            const purchasePrice = document.getElementById('product-purchase').value;
            const salePrice = document.getElementById('product-sale').value;
            const stock = document.getElementById('product-stock').value;
            const barcode = document.getElementById('product-barcode').value;

            if (!name || !brand || !batch || !expiry || !purchasePrice || !salePrice || !stock) {
                showToast('Please fill all required fields', 'error');
                return;
            }

            if (parseFloat(purchasePrice) <= 0 || parseFloat(salePrice) <= 0 || parseInt(stock) < 0) {
                showToast('Prices must be positive and stock cannot be negative', 'error');
                return;
            }

            console.log('Saving product:', { 
                name, brand, batch, expiry, 
                purchasePrice, salePrice, stock, barcode 
            });

            showToast('Product added successfully', 'success');
            productModal.classList.add('hidden');
            document.getElementById('product-form').reset();
        });
    }
});
