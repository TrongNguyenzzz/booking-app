# Booking App - Hotel Management System

A full-stack hotel booking application that allows users to search for hotels, make reservations, and manage their bookings across various cities worldwide.

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)
- [Demo](#-demo)

## ✨ Features

- **User Authentication**: Secure user registration and login with JWT-based authentication
- **Hotel Search**: Search hotels by city, date range, and number of guests
- **City Exploration**: Browse information about various cities including famous places and local cuisine recommendations
- **Property Types**: View different types of accommodations (hotels, apartments, resorts, villas, cabins)
- **Room Booking**: Reserve rooms with real-time availability checking
- **Reservation Management**: View current and past reservations with the ability to cancel upcoming bookings
- **Hotel Reviews**: Read and submit reviews for hotels
- **Responsive Design**: Mobile-friendly interface with Bootstrap styling

## 🛠 Tech Stack

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **Bootstrap 5 / React Bootstrap** - Responsive UI components
- **Axios** - HTTP client for API requests
- **React Date Range** - Date picker for booking
- **Swiper** - Touch slider for carousels
- **React Toastify** - Notification system
- **React Icons** - Icon library

### Backend
- **Express.js** - Node.js web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js
- **JSON Web Token (JWT)** - Authentication and authorization
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **cookie-parser** - Cookie parsing middleware
- **cors** - Cross-Origin Resource Sharing

## 📁 Project Structure

```
booking-app/
├── public/                     # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/                        # Frontend source code
│   ├── assets/                 # Images and static assets
│   ├── components/             # Reusable React components
│   │   ├── featured/           # Featured hotels component
│   │   ├── footer/             # Footer component
│   │   ├── guestLove/          # Guest favorites component
│   │   ├── header/             # Header with search functionality
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type list
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Review display components
│   │   └── searchItem/         # Search result item
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state management
│   │   └── SearchContext.jsx   # Search state management
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Data fetching hook
│   ├── pages/                  # Page components
│   │   ├── city/               # City information pages
│   │   ├── home/               # Homepage
│   │   ├── hotel/              # Hotel details page
│   │   ├── list/               # Search results list
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations page
│   ├── App.js                  # Main application component
│   └── index.js                # Application entry point
├── booking-api/                # Backend API
│   ├── api/
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.js         # Authentication logic
│   │   │   ├── hotel.js        # Hotel operations
│   │   │   ├── reservation.js  # Reservation operations
│   │   │   ├── review.js       # Review operations
│   │   │   ├── room.js         # Room operations
│   │   │   └── user.js         # User operations
│   │   ├── models/             # Mongoose schemas
│   │   │   ├── hotel.js        # Hotel model
│   │   │   ├── reservation.js  # Reservation model
│   │   │   ├── review.js       # Review model
│   │   │   ├── room.js         # Room model
│   │   │   └── user.js         # User model
│   │   ├── routes/             # API route definitions
│   │   │   ├── auth.js         # Auth routes
│   │   │   ├── hotel.js        # Hotel routes
│   │   │   ├── reservation.js  # Reservation routes
│   │   │   ├── review.js       # Review routes
│   │   │   ├── room.js         # Room routes
│   │   │   └── user.js         # User routes
│   │   └── utils/              # Utility functions
│   │       ├── error.js        # Error handling
│   │       └── verifyToken.js  # JWT verification middleware
│   ├── index.js                # Server entry point
│   └── package.json            # Backend dependencies
├── package.json                # Frontend dependencies
└── README.md                   # Project documentation
```

## 🚀 Installation and Setup

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB instance (local or cloud-based like MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd booking-api
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the `booking-api` directory with the following variables:

```env
# MongoDB connection string
MONGO=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# JWT secret key for token signing
JWT=your_jwt_secret_key

# Server port (optional, defaults to 5050)
PORT=5050
```

### Environment Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO` | MongoDB connection URI | Yes |
| `JWT` | Secret key for JWT token generation and verification | Yes |
| `PORT` | Port number for the backend server | No (default: 5050) |

## ▶️ Running the Application

### Start the Backend Server

Open a terminal and navigate to the backend directory:

```bash
cd booking-api
npm start
```

The API server will start on `http://localhost:5050`.

### Start the Frontend Development Server

Open another terminal in the project root directory:

```bash
npm start
```

The React application will start on `http://localhost:3000`.

### Access the Application

Open your browser and navigate to `http://localhost:3000` to use the application.

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get user by ID |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

### Hotels

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels (supports query filters) |
| GET | `/api/hotels/:id` | Get hotel by ID |
| POST | `/api/hotels` | Create a new hotel |
| PUT | `/api/hotels/:id` | Update hotel |
| DELETE | `/api/hotels/:id` | Delete hotel |
| GET | `/api/hotels/countByCity` | Get hotel count by city |
| GET | `/api/hotels/countByType` | Get hotel count by property type |
| GET | `/api/hotels/room/:id` | Get rooms for a specific hotel |

### Rooms

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room` | Get all rooms |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update room |
| PUT | `/api/room/availability/:id` | Update room availability |
| DELETE | `/api/room/:id/:hotelid` | Delete room from hotel |

### Reservations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation` | Get all reservations |
| GET | `/api/reservation/:id` | Get reservation by ID |
| GET | `/api/reservation/find/:userId` | Get reservations for a user |
| POST | `/api/reservation/:userId` | Create a reservation |
| PUT | `/api/reservation/:id` | Update reservation |
| DELETE | `/api/reservation/:id/:userId` | Delete reservation |

### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review` | Get all reviews |
| GET | `/api/review/:id` | Get review by ID |
| GET | `/api/review/hotel/:id` | Get reviews for a hotel |
| POST | `/api/review` | Create a review |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/booking-app.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style and conventions
   - Write meaningful commit messages
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your changes"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues

### Code Style Guidelines

- Use meaningful variable and function names
- Follow React best practices and hooks guidelines
- Keep components small and focused
- Use async/await for asynchronous operations
- Handle errors appropriately

## 📄 License

This project is licensed under the ISC License.

## 🎬 Demo

**Video Demo**: [Watch on YouTube](https://youtu.be/HBzZPsiOX20)

### Screenshots

**Homepage**
![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

**Search Results**
![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

**Hotel Details**
![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

**Reservations**
![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

---

> **Disclaimer**: All hotel names, addresses, and specific location data in the application are fictional. City information and recommendations are based on general research.

**Made with ❤️ by [TrongNguyenzzz](https://github.com/TrongNguyenzzz)**
