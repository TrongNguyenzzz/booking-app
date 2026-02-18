# Hotel Booking Application

A full-stack hotel booking and reservation management system that allows users to search for hotels, make reservations, and manage their bookings. The application features city guides with recommendations, user authentication, and a comprehensive review system.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**
  - User registration with secure password hashing
  - Login/logout functionality
  - JWT-based authentication
  - Protected routes for authenticated users

- **Hotel Search**
  - Search hotels by city, date, and number of guests
  - Filter hotels by various criteria
  - View hotel details, amenities, and pricing
  - Browse hotels by property type

- **Room Booking**
  - View available rooms for selected dates
  - Real-time room availability checking
  - Select and reserve specific rooms
  - Date range selection with calendar picker

- **Reservation Management**
  - View all reservations (past and current)
  - Cancel upcoming reservations
  - Track reservation history
  - View reservation details

- **City Guides**
  - Explore featured cities (Hanoi, Berlin, London, New York, Seattle, etc.)
  - City recommendations and famous attractions
  - Local cuisine suggestions

- **Reviews System**
  - View hotel reviews from other guests
  - Submit reviews for hotels

## Technology Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM 6.14.2** - Client-side routing
- **Bootstrap 5.3.1** & **React Bootstrap 2.8.0** - UI components and styling
- **Axios 1.4.0** - HTTP client for API requests
- **React Date Range 1.4.0** - Date picker component
- **date-fns 2.30.0** - Date utility library
- **React Icons 4.10.1** - Icon library
- **Swiper 10.2.0** - Touch slider component
- **React Toastify 9.1.3** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 7.4.1** - MongoDB object modeling
- **JSON Web Token (jsonwebtoken 9.0.1)** - Authentication
- **bcryptjs 2.4.3** - Password hashing
- **cors 2.8.5** - Cross-origin resource sharing
- **cookie-parser 1.4.6** - Cookie parsing middleware
- **dotenv 16.3.1** - Environment variable management

## Project Structure

```
booking-app/
├── booking-api/                 # Backend API
│   ├── api/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── auth.js          # Authentication logic
│   │   │   ├── hotel.js         # Hotel CRUD operations
│   │   │   ├── reservation.js   # Reservation management
│   │   │   ├── review.js        # Review handling
│   │   │   ├── room.js          # Room operations
│   │   │   └── user.js          # User management
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── hotel.js         # Hotel model
│   │   │   ├── reservation.js   # Reservation model
│   │   │   ├── review.js        # Review model
│   │   │   ├── room.js          # Room model
│   │   │   └── user.js          # User model
│   │   ├── routes/              # API route definitions
│   │   │   ├── auth.js          # /api/auth routes
│   │   │   ├── hotel.js         # /api/hotels routes
│   │   │   ├── reservation.js   # /api/reservation routes
│   │   │   ├── review.js        # /api/review routes
│   │   │   ├── room.js          # /api/room routes
│   │   │   └── user.js          # /api/user routes
│   │   └── utils/               # Utility functions
│   │       ├── error.js         # Error handling
│   │       └── verifyToken.js   # JWT verification
│   ├── index.js                 # Server entry point
│   └── package.json             # Backend dependencies
│
├── src/                         # Frontend React app
│   ├── assets/                  # Static assets (images)
│   ├── components/              # Reusable UI components
│   │   ├── featured/            # Featured cities section
│   │   ├── footer/              # Footer component
│   │   ├── guestLove/           # Popular destinations
│   │   ├── header/              # Header with search
│   │   ├── navbar/              # Navigation bar
│   │   ├── propertyList/        # Property type listing
│   │   ├── reserve/             # Room reservation modal
│   │   ├── review/              # Hotel reviews
│   │   └── searchItem/          # Search result item
│   ├── context/                 # React Context providers
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── SearchContext.jsx    # Search state management
│   ├── hooks/                   # Custom React hooks
│   │   └── useFetch.js          # Data fetching hook
│   ├── pages/                   # Page components
│   │   ├── city/                # City guide pages
│   │   ├── home/                # Homepage
│   │   ├── hotel/               # Hotel details page
│   │   ├── list/                # Search results page
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── reservation/         # User reservations page
│   ├── App.js                   # Root component
│   └── index.js                 # React entry point
│
├── public/                      # Public static files
├── package.json                 # Frontend dependencies
└── README.md                    # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher) - [Download](https://nodejs.org/)
- **npm** (v6.x or higher) - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## Installation

### Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### Install Frontend Dependencies

```bash
# From the root directory
npm install
```

### Install Backend Dependencies

```bash
cd booking-api
npm install
```

## Environment Variables

Create a `.env` file in the `booking-api` directory with the following variables:

```env
# MongoDB Connection String
MONGO=mongodb://localhost:27017/booking-app
# Or use MongoDB Atlas:
# MONGO=mongodb+srv://<username>:<password>@cluster.mongodb.net/booking-app

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key_here

# Server Port (optional, defaults to 5050)
PORT=5050
```

## Running the Application

### Start the Backend Server

```bash
# From the booking-api directory
cd booking-api
npm start
```

The API server will start on `http://localhost:5050`

### Start the Frontend Development Server

```bash
# From the root directory (in a new terminal)
npm start
```

The React application will start on `http://localhost:3000`

### Running Both Simultaneously

Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd booking-app/booking-api
npm start
```

**Terminal 2 (Frontend):**
```bash
cd booking-app
npm start
```

## API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Users (`/api/user`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get user by ID |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

### Hotels (`/api/hotels`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels |
| GET | `/api/hotels/:id` | Get hotel by ID |
| POST | `/api/hotels` | Create new hotel |
| PUT | `/api/hotels/:id` | Update hotel |
| DELETE | `/api/hotels/:id` | Delete hotel |
| GET | `/api/hotels/countByCity` | Get hotel count by city |
| GET | `/api/hotels/countByType` | Get hotel count by property type |
| GET | `/api/hotels/room/:id` | Get rooms for a hotel |

### Rooms (`/api/room`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room` | Get all rooms |
| POST | `/api/room/:hotelid` | Create room for hotel |
| PUT | `/api/room/:id` | Update room |
| PUT | `/api/room/availability/:id` | Update room availability |
| DELETE | `/api/room/:id/:hotelid` | Delete room |

### Reservations (`/api/reservation`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation` | Get all reservations |
| GET | `/api/reservation/:id` | Get reservation by ID |
| GET | `/api/reservation/find/:userId` | Get user's reservations |
| POST | `/api/reservation/:userId` | Create reservation |
| PUT | `/api/reservation/:id` | Update reservation |
| DELETE | `/api/reservation/:id/:userId` | Delete reservation |

### Reviews (`/api/review`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review` | Get all reviews |
| GET | `/api/review/:id` | Get review by ID |
| GET | `/api/review/hotel/:id` | Get reviews for a hotel |
| POST | `/api/review` | Create new review |

## Screenshots

### Homepage
The landing page featuring city exploration, property types, and guest favorites.

![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Hotel Search Results
Search results showing available hotels with filtering options.

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Details
Detailed hotel information including description, amenities, pricing, and guest reviews.

![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservation Management
View and manage your reservations, with options to cancel upcoming bookings.

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Demo

Watch the full demo video: [YouTube Demo](https://youtu.be/HBzZPsiOX20)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
   ```bash
   git fork https://github.com/TrongNguyenzzz/booking-app.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your changes"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Code Style Guidelines

- Use ES6+ syntax
- Follow React best practices
- Use meaningful variable and function names
- Keep components small and focused

## License

This project is licensed under the ISC License.

---

**Disclaimer:** All hotel information (names, addresses, etc.) displayed in this application is fictional and created for demonstration purposes. City information is based on research but may not be fully accurate.

**Enjoy using the Hotel Booking Application!** 🏨
