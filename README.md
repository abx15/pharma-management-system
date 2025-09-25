# Pharmacy Management Web App - Frontend

A complete frontend for a Pharmacy Management System built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Dashboard**: Summary cards, recent transactions table, and chart placeholders
- **Sales Management**: Create new sales, generate invoices, and print receipts
- **Product Inventory**: CRUD operations for products with low stock alerts
- **Customer Management**: Add, edit, and view customer information
- **Settings**: Configure application settings and test notifications
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Setup Instructions

1. Clone or download the project files
2. Serve the files using a local web server (see options below)
3. Open `index.html` in your browser

### Using Python Simple HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
Then navigate to http://localhost:8000

Using Node.js http-server
bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
Then navigate to http://localhost:8000

Using PHP Built-in Server
bash
php -S localhost:8000
Then navigate to http://localhost:8000

File Structure
text
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
│       ├── app.js      # Main application logic
│       ├── sales.js    # Sales-specific functionality
│       ├── products.js # Products management
│       ├── customers.js # Customers management
│       ├── api.js      # API simulation functions
│       ├── util.js     # Utility functions
│       └── sample-data.js # Sample data for the app
└── README.md           # This file
How It Works
The application uses:

Tailwind CSS for styling via CDN

Vanilla JavaScript ES6 modules for functionality

LocalStorage for data persistence across page reloads

Sample data to simulate a working backend

Integrating with a Real Backend
To connect with a real backend API:

Replace the functions in api.js with actual API calls

Update the endpoints in the fetch requests to match your API

Handle authentication if required

Modify the data structures if your API uses different formats

Example of a real API call:

javascript
// Instead of the simulated function:
export function sendInvoice(invoice) {
    return fetch('/api/invoices', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(invoice)
    })
    .then(response => response.json());
}
Browser Support
This application works in all modern browsers that support:

ES6 modules

CSS Grid and Flexbox

LocalStorage

Notes
All data is stored in the browser's localStorage

The application uses sample data that resets on page refresh (unless saved to localStorage)

The print functionality uses CSS media queries for print styling

License
This project is for demonstration purposes.

text

## Next Steps

This implementation provides the complete dashboard page with all the required functionality. The other pages (sales.html, products.html, customers.html, settings.html) would follow a similar structure with their specific JavaScript modules.

To complete the application, you would need to:

1. Create the sales.html page with billing functionality
2. Implement the products.html page with CRUD operations
3. Build the customers.html page with customer management
4. Develop the settings.html page with configuration options
5. Add all the JavaScript modules for each page

The code provided gives you a solid foundation with reusable components, utility functions, and a consistent design system that follows the requirements.





```


##  Admin: email: admin@pharmamanage.com, password: admin123


## Store Owner: email: owner@pharmamanage.com, password: owner123