import { showToast } from './util.js';
import { sendInvoice, sendEmailToAdmin } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    const newSaleBtn = document.getElementById('new-sale-btn');
    const saleModal = document.getElementById('sale-modal');
    const closeSale = document.getElementById('close-sale');
    const completeSale = document.getElementById('complete-sale');

    if (newSaleBtn && saleModal) {
        newSaleBtn.addEventListener('click', () => {
            saleModal.classList.remove('hidden');
        });
    }

    if (closeSale && saleModal) {
        closeSale.addEventListener('click', () => {
            saleModal.classList.add('hidden');
        });
    }

    if (completeSale) {
        completeSale.addEventListener('click', async () => {
            const invoice = {
                id: `INV-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
                date: new Date().toISOString(),
                customerId: document.getElementById('customer-select').value,
                items: [
                    { productId: "p1001", name: "Paracetamol 500mg", qty: 2, unit_price: 35.00, discount: 0 },
                    { productId: "p1005", name: "Cetirizine 10mg", qty: 1, unit_price: 25.00, discount: 0 }
                ],
                subtotal: 95.00,
                tax: 4.75,
                discount: 0,
                total: 99.75,
                payment_method: document.querySelector('input[name="payment-method"]:checked').value,
                sentToAdmin: false
            };

            try {
                completeSale.disabled = true;
                completeSale.textContent = 'Processing...';
                const result = await sendInvoice(invoice);

                if (result.ok) {
                    if (user.role === 'owner') {
                        const emailResult = await sendEmailToAdmin({
                            invoiceId: invoice.id,
                            invoiceDate: invoice.date,
                            totalAmount: invoice.total,
                            createdBy: user.name
                        });
                        showToast(emailResult.ok ? 'Invoice created and sent to admin' : 'Invoice created but failed to send email to admin', emailResult.ok ? 'success' : 'warning');
                    } else {
                        showToast('Invoice created successfully', 'success');
                    }

                    saleModal.classList.add('hidden');
                    document.getElementById('customer-select').value = '';
                    document.querySelector('input[name="payment-method"][value="cash"]').checked = true;
                } else {
                    showToast('Failed to create invoice', 'error');
                }
            } catch (error) {
                showToast('Error creating invoice', 'error');
                console.error('Invoice error:', error);
            } finally {
                completeSale.disabled = false;
                completeSale.textContent = 'Complete Sale';
            }
        });
    }
});
