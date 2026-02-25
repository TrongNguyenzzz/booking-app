# Booking App

A full-stack hotel booking application built with React for the frontend and Express.js for the backend. This application allows users to browse hotels across different cities, make reservations, manage their bookings, and read/write reviews.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Contributing](#contributing)

## Features

- **User Authentication**: Register and login with secure JWT-based authentication
- **Hotel Browsing**: Explore hotels across multiple cities (New York, Los Angeles, Seattle, London, Berlin, Budapest, Hanoi, and more)
- **Advanced Search**: Filter hotels by city, date range, and number of guests
- **Room Reservation**: Book available rooms with date selection
- **Reservation Management**: View current and past reservations, cancel bookings
- **Reviews**: Read and submit reviews for hotels
- **City Guides**: Explore city information with recommendations and highlights

## Technology Stack

### Frontend
- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Bootstrap 5** & **React Bootstrap** - UI components and styling
- **Axios** - HTTP client for API requests
- **React Date Range** - Date picker component
- **React Toastify** - Toast notifications
- **Swiper** - Touch slider component
- **React Icons** - Icon library

### Backend
- **Express.js 4** - Node.js web framework
- **MongoDB** with **Mongoose 7** - Database and ODM
- **JSON Web Token (JWT)** - Authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** or **pnpm** package manager
- **MongoDB** instance (local or cloud-based like MongoDB Atlas)

## Installation

### Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd booking-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `booking-api` directory (see [Environment Variables](#environment-variables))

### Frontend Setup

1. Navigate to the root directory (if not already there):
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   Or with pnpm:
   ```bash
   pnpm install
   ```

## Environment Variables

Create a `.env` file in the `booking-api` directory with the following variables:

```env
# MongoDB Connection String
MONGO=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# Server Port (optional, defaults to 5050)
PORT=5050
```

**Important**: Never commit your `.env` file to version control. It contains sensitive information.

## Running the Application

### Start the Backend Server

```bash
cd booking-api
npm start
```

The API server will run on `http://localhost:5050`

### Start the Frontend Development Server

In a new terminal window:

```bash
# From the root directory
npm start
```

The React app will run on `http://localhost:3000`

## Project Structure

```
booking-app/
├── booking-api/                 # Backend Express.js application
│   ├── api/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── auth.js          # Authentication logic
│   │   │   ├── hotel.js         # Hotel operations
│   │   │   ├── room.js          # Room operations
│   │   │   ├── reservation.js   # Reservation operations
│   │   │   ├── review.js        # Review operations
│   │   │   └── user.js          # User operations
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── hotel.js
│   │   │   ├── room.js
│   │   │   ├── reservation.js
│   │   │   ├── review.js
│   │   │   └── user.js
│   │   ├── routes/              # API route definitions
│   │   │   ├── auth.js
│   │   │   ├── hotel.js
│   │   │   ├── room.js
│   │   │   ├── reservation.js
│   │   │   ├── review.js
│   │   │   └── user.js
│   │   └── utils/               # Utility functions
│   │       ├── error.js         # Error handling
│   │       └── verifyToken.js   # JWT verification
│   ├── index.js                 # Server entry point
│   └── package.json
├── public/                      # Static assets
├── src/                         # Frontend React application
│   ├── assets/                  # Images and static files
│   ├── components/              # Reusable React components
│   │   ├── featured/            # Featured cities component
│   │   ├── footer/              # Footer component
│   │   ├── guestLove/           # Guest favorites component
│   │   ├── header/              # Header with search
│   │   ├── navbar/              # Navigation bar
│   │   ├── propertyList/        # Property type listings
│   │   ├── reserve/             # Room reservation modal
│   │   ├── review/              # Review components
│   │   └── searchItem/          # Search result item
│   ├── context/                 # React context providers
│   ├── hooks/                   # Custom React hooks
│   ├── pages/                   # Page components
│   │   ├── city/                # City detail pages
│   │   ├── home/                # Home page
│   │   ├── hotel/               # Hotel detail page
│   │   ├── list/                # Hotel listing page
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── reservation/         # User reservations page
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global styles
│   └── index.js                 # React entry point
└── package.json                 # Frontend dependencies
```

## Available Scripts

### Frontend Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (one-way operation) |

### Backend Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the server with nodemon for auto-reload |

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Hotels

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels (supports query filters) |
| GET | `/api/hotels/:id` | Get hotel by ID |
| POST | `/api/hotels` | Create a new hotel |
| PUT | `/api/hotels/:id` | Update hotel |
| DELETE | `/api/hotels/:id` | Delete hotel |
| GET | `/api/hotels/countByCity` | Get hotel count by city |
| GET | `/api/hotels/countByType` | Get hotel count by type |
| GET | `/api/hotels/room/:id` | Get rooms for a specific hotel |

### Rooms

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room` | Get all rooms |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update room |
| PUT | `/api/room/availability/:id` | Update room availability |
| DELETE | `/api/room/:id/:hotelid` | Delete room |

### Reservations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation` | Get all reservations |
| GET | `/api/reservation/:id` | Get reservation by ID |
| GET | `/api/reservation/find/:userId` | Get user's reservations |
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

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get user by ID |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

## Demo

**Demo Video**: [https://youtu.be/HBzZPsiOX20](https://youtu.be/HBzZPsiOX20)

### Screenshots

**Home Page**
![Home Page](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

**Search Results**
![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

**Hotel Details**
![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

**Reservations**
![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write meaningful commit messages
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Code Style Guidelines

- Use ES6+ syntax
- Follow React best practices
- Use meaningful variable and function names
- Comment complex logic when necessary

### Reporting Issues

If you find a bug or have a feature request, please open an issue with:
- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

---

**Disclaimer**: All hotel names, addresses, and other specific information on this site are fictional and created for demonstration purposes. City information is based on research but should not be used as a travel guide.

**Enjoy using the Booking App!**




