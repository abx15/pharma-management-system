export const products = [
    { id: "p1001", name: "Paracetamol 500mg", brand: "Acme", batch: "B2025", expiry: "2026-09-01", purchase_price: 20.00, sale_price: 35.00, stock: 120, barcode: "8901234567890" },
    { id: "p1002", name: "Amoxicillin 250mg", brand: "MediCorp", batch: "B2024", expiry: "2025-06-15", purchase_price: 45.00, sale_price: 75.00, stock: 85, barcode: "8901234567891" },
    { id: "p1003", name: "Vitamin C 1000mg", brand: "HealthPlus", batch: "B2025", expiry: "2026-03-20", purchase_price: 30.00, sale_price: 50.00, stock: 200, barcode: "8901234567892" },
    { id: "p1004", name: "Ibuprofen 400mg", brand: "PainAway", batch: "B2024", expiry: "2025-11-30", purchase_price: 25.00, sale_price: 40.00, stock: 5, barcode: "8901234567893" },
    { id: "p1005", name: "Cetirizine 10mg", brand: "AllergyFree", batch: "B2025", expiry: "2026-07-15", purchase_price: 15.00, sale_price: 25.00, stock: 150, barcode: "8901234567894" }
];

export const customers = [
    { id: "c2001", name: "Ramesh Kumar", phone: "9876543210", email: "ramesh@example.com", address: "Allahabad Road, Mumbai" },
    { id: "c2002", name: "Suresh Patel", phone: "8765432109", email: "suresh@example.com", address: "Gandhi Nagar, Delhi" },
    { id: "c2003", name: "Priya Sharma", phone: "7654321098", email: "priya@example.com", address: "MG Road, Bangalore" },
    { id: "c2004", name: "Amit Singh", phone: "6543210987", email: "amit@example.com", address: "Park Street, Kolkata" },
    { id: "c2005", name: "Neha Gupta", phone: "5432109876", email: "neha@example.com", address: "Marine Drive, Mumbai" }
];

export const transactions = [
    {
        id: "inv-20230919-001",
        date: "2025-09-19T14:35:00Z",
        customerId: "c2001",
        items: [
            { productId: "p1001", name: "Paracetamol 500mg", qty: 2, unit_price: 35.00, discount: 0 },
            { productId: "p1005", name: "Cetirizine 10mg", qty: 1, unit_price: 25.00, discount: 0 }
        ],
        subtotal: 95.00,
        tax: 4.75,
        discount: 0,
        total: 99.75,
        payment_method: "Cash",
        sentToAdmin: true
    },
    {
        id: "inv-20230919-002",
        date: "2025-09-19T15:20:00Z",
        customerId: "c2002",
        items: [
            { productId: "p1002", name: "Amoxicillin 250mg", qty: 1, unit_price: 75.00, discount: 5 }
        ],
        subtotal: 75.00,
        tax: 3.75,
        discount: 3.75,
        total: 75.00,
        payment_method: "Card",
        sentToAdmin: true
    },
    {
        id: "inv-20230919-003",
        date: "2025-09-19T16:45:00Z",
        customerId: "c2003",
        items: [
            { productId: "p1003", name: "Vitamin C 1000mg", qty: 3, unit_price: 50.00, discount: 10 },
            { productId: "p1001", name: "Paracetamol 500mg", qty: 1, unit_price: 35.00, discount: 0 }
        ],
        subtotal: 185.00,
        tax: 9.25,
        discount: 15.00,
        total: 179.25,
        payment_method: "UPI",
        sentToAdmin: false
    },
    {
        id: "inv-20230919-004",
        date: "2025-09-19T17:30:00Z",
        customerId: "c2004",
        items: [
            { productId: "p1004", name: "Ibuprofen 400mg", qty: 2, unit_price: 40.00, discount: 0 },
            { productId: "p1005", name: "Cetirizine 10mg", qty: 1, unit_price: 25.00, discount: 0 }
        ],
        subtotal: 105.00,
        tax: 5.25,
        discount: 0,
        total: 110.25,
        payment_method: "Cash",
        sentToAdmin: true
    },
    {
        id: "inv-20230919-005",
        date: "2025-09-19T18:15:00Z",
        customerId: "c2005",
        items: [
            { productId: "p1002", name: "Amoxicillin 250mg", qty: 2, unit_price: 75.00, discount: 5 }
        ],
        subtotal: 150.00,
        tax: 7.50,
        discount: 7.50,
        total: 150.00,
        payment_method: "Card",
        sentToAdmin: false
    }
];
