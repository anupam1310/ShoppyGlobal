ShoppyGlobe E-commerce Application
Welcome to ShoppyGlobe, a modern, responsive e-commerce application built with React and Vite. This project serves as a comprehensive example of building a feature-rich web application using modern frontend technologies and best practices.

✨ Features
Product Catalog: Browse a dynamic list of products fetched from the DummyJSON API.

Redux-Powered State: Centralized state management using Redux Toolkit for a predictable and scalable application state.

Dynamic Search: Instantly filter products by name, with the search state managed by Redux.

React Router: A complete routing solution with createBrowserRouter for clean, nested routes.

Code Splitting: Components are lazy-loaded using React.lazy and Suspense to improve initial page load performance.

Shopping Cart: A fully functional cart with capabilities to add, remove, and update item quantities.

Checkout Process: A simple and intuitive checkout form that summarizes the order and simulates order placement.

Responsive Design: Fully responsive UI built with Tailwind CSS, ensuring a great experience on any device.

Error Handling: A custom 404 page for invalid routes and graceful error messages for failed API requests.

🚀 Tech Stack
Framework: React

Build Tool: Vite

Routing: React Router

State Management: Redux Toolkit & React-Redux

Styling: Tailwind CSS

API: DummyJSON for product data.

📂 Project Structure
This project follows a feature-sliced architecture, which organizes code by feature rather than by type. This makes the codebase more modular, scalable, and easier to navigate.

/src
├── /app
│   └── store.js            # Redux store configuration
│
├── /components             # Shared, reusable UI components (Header, ProductItem, etc.)
│   ├── Header.jsx
│   └── ...
│
├── /features               # Feature-specific logic and components
│   ├── /cart
│   │   ├── cartSlice.js    # Redux slice for cart state
│   │   └── CartItem.jsx    # Component specific to the cart feature
│   │
│   └── /products
│       └── productSlice.js # Redux slice for product state
│
├── /pages                  # Top-level page components for each route
│   ├── HomePage.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx                 # Main component with routing setup
└── main.jsx                # Application entry point

⚙️ Getting Started
Prerequisites
Node.js (v18 or higher recommended)

npm or yarn

Installation & Setup
Clone the repository:

git clone [https://github.com/anupam1310/ShoppyGlobal.git](https://github.com/anupam1310/ShoppyGlobal.git)

Navigate to the project directory:

cd ShoppyGlobal

Install dependencies:

npm install

Run the development server:

npm run dev

The application will be available at http://localhost:5173.

🔗 GitHub Repository
The complete source code is available at: https://www.google.com/search?q=https://github.com/anupam1310/ShoppyGlobal.git