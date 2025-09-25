# 💊 Pharmacy Management Web App - Frontend

A complete **frontend** for a Pharmacy Management System built using **HTML, Tailwind CSS, and vanilla JavaScript**.
This app simulates key pharmacy operations with a **responsive and interactive UI**.

---

## 🚀 Features

- **Dashboard**

  - Summary cards for quick stats
  - Recent transactions table
  - Chart placeholders for analytics

- **Sales Management**

  - Create new sales
  - Generate invoices
  - Print receipts

- **Product Inventory**

  - CRUD operations for products
  - Low stock alerts

- **Customer Management**

  - Add, edit, and view customer information

- **Settings**

  - Configure application settings
  - Test notifications

- **Responsive Design**

  - Works on desktop, tablet, and mobile devices

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/abx15/pharma-management-system.git
cd pharma-management-system
```

### 2. Serve the files using a local web server

#### Using Python Simple HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Open [http://localhost:8000](http://localhost:8000)

#### Using Node.js http-server

```bash
npm install -g http-server
http-server -p 8000
```

Open [http://localhost:8000](http://localhost:8000)

#### Using PHP Built-in Server

```bash
php -S localhost:8000
```

Open [http://localhost:8000](http://localhost:8000)

---

## 📂 File Structure

```
pharmacy-management-app/
├── index.html          # Dashboard page
├── sales.html          # Sales and transactions page
├── products.html       # Products inventory page
├── customers.html      # Customers management page
├── settings.html       # Settings page
├── assets/
│   ├── css/
│   │   └── style.css   # Custom styles
│   └── js/
│       ├── app.js       # Main application logic
│       ├── sales.js     # Sales-specific functionality
│       ├── products.js  # Products management
│       ├── customers.js # Customers management
│       ├── api.js       # API simulation functions
│       ├── util.js      # Utility functions
│       └── sample-data.js # Sample data
└── README.md            # This file
```

---

## 🛠 How It Works

- **Tailwind CSS** for styling via CDN
- **Vanilla JavaScript ES6 modules** for functionality
- **LocalStorage** for data persistence
- Sample data simulates a backend

### Integrating with a Real Backend

1. Replace functions in `api.js` with real API calls
2. Update endpoints in fetch requests
3. Handle authentication if required
4. Adjust data structures if needed

Example:

```javascript
export function sendInvoice(invoice) {
  return fetch("/api/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(invoice),
  }).then((response) => response.json());
}
```

---

## 🌐 Browser Support

- ES6 modules
- CSS Grid & Flexbox
- LocalStorage

---

## 💡 Notes

- All data is stored in browser **LocalStorage**
- Sample data resets on refresh unless saved
- Print uses **CSS media queries**

---

## 🔑 Default Accounts

- **Admin**
  Email: `admin@pharmamanage.com`
  Password: `admin123`

- **Store Owner**
  Email: `owner@pharmamanage.com`
  Password: `owner123`

---

## 📌 Next Steps

1. Build `sales.html` with billing functionality
2. Implement `products.html` with CRUD operations
3. Create `customers.html` for customer management
4. Develop `settings.html` for app configuration
5. Enhance JavaScript modules for each page

This project provides a **solid frontend foundation** with reusable components and consistent design.

---

## 📜 License

This project is for **demonstration purposes** only.

## 📞 Contact

For questions, suggestions, or collaboration, reach out:

**Name:** Arun
**Email:** developaearunwork@gmail.com

**GitHub:** https://github.com/abx15

**LinkedIn:** https://www.linkedin.com/in/arun-kumar-bind-a3b047353/
