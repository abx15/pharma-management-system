export function sendInvoice(invoice) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Invoice sent:', invoice);
            resolve({ ok: true, message: 'Invoice sent successfully' });
        }, 1500);
    });
}

export function sendEmailToAdmin(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Email sent to admin:', data);
            resolve({ ok: true, message: 'Email sent to admin successfully' });
        }, 1500);
    });
}

export function sendTestEmail(payload) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Test email sent:', payload);
            resolve({ ok: true, message: 'Test email sent successfully' });
        }, 1500);
    });
}

export function exportCSV(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('CSV exported:', data);
            resolve({ ok: true, message: 'CSV exported successfully' });
        }, 1500);
    });
}

export function fetchData(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = [];
            if (endpoint === '/api/products') {
                data = [
                    { id: "p1001", name: "Paracetamol 500mg", brand: "Acme", batch: "B2025", expiry: "2026-09-01", purchase_price: 20.00, sale_price: 35.00, stock: 120, barcode: "8901234567890" },
                    { id: "p1002", name: "Amoxicillin 250mg", brand: "MediCorp", batch: "B2024", expiry: "2025-06-15", purchase_price: 45.00, sale_price: 75.00, stock: 85, barcode: "8901234567891" }
                ];
            } else if (endpoint === '/api/customers') {
                data = [
                    { id: "c2001", name: "Ramesh Kumar", phone: "9876543210", email: "ramesh@example.com", address: "Allahabad Road, Mumbai" },
                    { id: "c2002", name: "Suresh Patel", phone: "8765432109", email: "suresh@example.com", address: "Gandhi Nagar, Delhi" }
                ];
            } else if (endpoint === '/api/transactions') {
                data = [
                    { id: "inv-20230919-001", date: "2025-09-19T14:35:00Z", customerId: "c2001", items: [{ productId: "p1001", name: "Paracetamol 500mg", qty: 2, unit_price: 35.00, discount: 0 }], subtotal: 70.00, tax: 3.50, discount: 0, total: 73.50, payment_method: "Cash", sentToAdmin: true }
                ];
            }
            resolve({ ok: true, data });
        }, 1000);
    });
}
