# MERN Admin Dashboard

MERN Admin Dashboard is a full-stack web application built with the MERN (MongoDB, Express, React, and Node.js) stack. This application serves as a template for building an admin dashboard with various features such as user authentication, role-based access control, and data visualization.

### Table of Contents

- Installation
- Usage
- Features
- Technologies Used
- Contributing

### Installation

1. Clone the repository.
   git clone https://github.com/manir22sust/mern-admin-dashboard.git

2. Install the dependencies for both the client and server applications.
   cd mern-admin-dashboard/client && npm install
   cd ../server && npm install

3. Create a .env file in the server directory with the following variables.
   VITE_APP_BASE_URL=
   PORT=
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>

4. Start the server and client applications.
   cd ../server && yarn dev
   cd ../client && npm start

5. Navigate to http://localhost:5173 in your browser.

### Usage

Upon opening the application, you will be taken to the login page. You can use the following credentials to log in as an admin.
Email: admin@example.com
Password: password
Once logged in, you will be taken to the dashboard page where you can view and manage users, products, and orders.

### Features

- Upon opening the application, you will be taken to the login page. You can use the following credentials to log in as an admin.

1. Email: admin@example.com
2. Password: password

- Once logged in, you will be taken to the dashboard page where you can view and manage users, products, and orders.

### Features

- User authentication with JWT.
- Role-based access control with different levels of access for admins and users.
- Data visualization with charts and graphs.
- User management with CRUD operations.
- Product management with CRUD operations.
- Order management with CRUD operations.

### Technologies Used

- MongoDB - NoSQL database used for storing data.
- Express - Web framework used for building the server.
- React - JavaScript library used for building the client-side application.
- Node.js - JavaScript runtime used for building the server.
- Redux - JavaScript library used for managing application state.
- Material-UI - React component library used for styling.
- Chart.js - JavaScript library used for data visualization.
- Axios - Promise-based HTTP client used for making API requests.

### Contributing

Contributions are always welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.
