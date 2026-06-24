# Booking App - Hotel Management System

A full-stack hotel booking and management web application that allows users to search for hotels by city, view property details and reviews, make room reservations, and manage their bookings. The app also features city guide pages with travel recommendations and local cuisine highlights.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Data Models](#data-models)
- [Available Scripts](#available-scripts)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Authentication
- User registration with username, email, and password
- Secure login with JWT-based authentication
- Password hashing with bcryptjs
- Protected routes for authenticated users

### Hotel Search and Browsing
- Search hotels by city, date range, and number of guests
- Filter results by price range and availability
- View hotel details including photos, descriptions, and ratings
- Browse properties by type (hotels, apartments, resorts, villas, cabins)

### Room Reservation
- View available rooms for selected dates
- Reserve rooms with real-time availability checking
- Automatic total price calculation based on stay duration
- Room unavailability tracking to prevent double-booking

### Reservation Management
- View all current and past reservations
- Cancel current reservations
- View reservation details including hotel name, room number, dates, and total cost

### Reviews
- Read reviews from other guests for each hotel
- Submit ratings (0-10 scale) and written comments
- Reviews linked to user accounts for accountability

### City Guide Pages
- Dedicated pages for featured cities (Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, London)
- Photo galleries showcasing city attractions
- Local food and restaurant recommendations
- Travel tips and destination highlights

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| React-Bootstrap / Bootstrap 5 | UI component framework |
| Axios | HTTP client for API requests |
| react-date-range | Date picker for search and booking |
| date-fns | Date utility functions |
| Swiper | Image carousels and sliders |
| react-toastify | Toast notifications |
| Font Awesome | Icons |
| react-icons | Additional icon library |

### Backend
| Technology | Purpose |
|---|---|
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |
| cors | Cross-origin resource sharing |
| dotenv | Environment variable management |

## Project Structure

```
booking-app/
├── public/                     # Static assets (favicon, index.html, manifest)
├── src/                        # Frontend source code
│   ├── App.js                  # Root component with route definitions
│   ├── App.css                 # Global styles
│   ├── assets/                 # Images (city photos, hotel logo, food images)
│   ├── components/             # Reusable UI components
│   │   ├── featured/           # Featured properties section
│   │   ├── footer/             # Site footer
│   │   ├── guestLove/          # "Guests Love" highlights section
│   │   ├── header/             # Page header with search bar
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listing
│   │   ├── reserve/            # Reservation modal/form
│   │   ├── review/             # Review display component
│   │   └── searchItem/         # Individual search result card
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state management
│   │   └── SearchContext.jsx   # Search parameters state
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Data fetching hook with loading/error states
│   └── pages/                  # Page-level components
│       ├── city/               # City guide pages (Berlin, Budapest, etc.)
│       ├── home/               # Homepage
│       ├── hotel/              # Hotel detail page
│       ├── list/               # Search results list
│       ├── login/              # Login page
│       ├── register/           # Registration page
│       └── reservation/        # Reservation management page
├── booking-api/                # Backend API
│   ├── index.js                # Express server entry point
│   ├── package.json            # Backend dependencies
│   └── api/
│       ├── controllers/        # Route handler logic
│       │   ├── auth.js         # Register and login handlers
│       │   ├── hotel.js        # Hotel CRUD operations
│       │   ├── reservation.js  # Reservation management
│       │   ├── review.js       # Review CRUD operations
│       │   ├── room.js         # Room CRUD operations
│       │   └── user.js         # User management
│       ├── models/             # Mongoose schemas
│       │   ├── hotel.js        # Hotel schema
│       │   ├── reservation.js  # Reservation schema
│       │   ├── review.js       # Review schema
│       │   ├── room.js         # Room schema
│       │   └── user.js         # User schema
│       ├── routes/             # Express route definitions
│       │   ├── auth.js         # /api/auth routes
│       │   ├── hotel.js        # /api/hotels routes
│       │   ├── reservation.js  # /api/reservation routes
│       │   ├── review.js       # /api/review routes
│       │   ├── room.js         # /api/room routes
│       │   └── user.js         # /api/user routes
│       └── utils/              # Utility modules
│           ├── error.js        # Custom error handler
│           └── verifyToken.js  # JWT verification middleware
├── package.json                # Frontend dependencies
├── pnpm-lock.yaml              # pnpm lockfile
└── .env.production             # Production environment variables
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **pnpm** package manager
- **MongoDB** instance (local or cloud-hosted, e.g., MongoDB Atlas)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd booking-api
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the `booking-api/` directory:

```env
MONGO=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5050
```

Replace the placeholders with your actual MongoDB connection string and a secure JWT secret.

### 5. Start the Backend Server

```bash
cd booking-api
npm start
```

The API server will start on [http://localhost:5050](http://localhost:5050).

### 6. Start the Frontend Development Server

In a new terminal, from the project root:

```bash
npm start
```

The React app will start on [http://localhost:3000](http://localhost:3000).

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description | Example |
|---|---|---|
| `MONGO` | MongoDB connection URI | `mongodb+srv://user:pass@cluster.mongodb.net/bookingdb` |
| `JWT_SECRET` | Secret key for signing JWTs | `my_super_secret_key` |
| `PORT` | Port for the Express server | `5050` |

### Frontend (`.env` in project root, optional)

| Variable | Description |
|---|---|
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel Analytics tracking ID (production only) |

## API Reference

The backend exposes a RESTful API at `http://localhost:5050/api`.

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Hotels

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/hotels` | Get all hotels (supports query filters) |
| GET | `/api/hotels/:id` | Get a specific hotel by ID |
| POST | `/api/hotels` | Create a new hotel (admin only) |
| PUT | `/api/hotels/:id` | Update a hotel (admin only) |
| DELETE | `/api/hotels/:id` | Delete a hotel (admin only) |

### Rooms

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/room/:id` | Get a specific room by ID |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update a room |
| PUT | `/api/room/availability/:id` | Update room availability dates |
| DELETE | `/api/room/:id/:hotelid` | Delete a room |

### Reservations

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/reservation/:userid` | Get all reservations for a user |
| POST | `/api/reservation/:userid` | Create a new reservation |
| DELETE | `/api/reservation/:id/:userid` | Cancel a reservation |

### Reviews

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/review/:hotelid` | Get all reviews for a hotel |
| POST | `/api/review` | Create a new review |
| DELETE | `/api/review/:id` | Delete a review |

### Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/user/:id` | Get a user by ID |
| PUT | `/api/user/:id` | Update user information |
| DELETE | `/api/user/:id` | Delete a user |

## Data Models

### Hotel
- `name` - Hotel name
- `type` - Property type (hotel, apartment, resort, villa, cabin)
- `city` - City where the hotel is located
- `address` - Street address
- `distance` - Distance from city center
- `photos` - Array of photo URLs
- `title` - Display title
- `desc` - Full description
- `rating` - Rating score (0-10)
- `subDesc` - Short tagline or subtitle
- `rooms` - Array of room IDs
- `cheapestPrice` - Starting price
- `featured` - Whether the hotel is featured on the homepage
- `subSearch` - Search subtitle text

### Room
- `title` - Room name/type
- `price` - Price per night
- `maxPeople` - Maximum occupancy
- `desc` - Room description
- `roomNumbers` - Array of room numbers with their unavailable dates

### Reservation
- `user` - User ID
- `dates` - Array of reserved dates
- `hotel` - Hotel ID
- `room` - Room ID
- `hotelName` - Hotel name (denormalized)
- `roomNumber` - Room number
- `hotelPhoto` - Hotel photo URL
- `total` - Total price for the stay

### Review
- `userid` - User ID of the reviewer
- `username` - Username of the reviewer
- `rate` - Rating score (0-10)
- `comment` - Review text
- `hotelid` - Hotel ID being reviewed

### User
- `username` - Unique username
- `email` - Unique email address
- `password` - Hashed password
- `isAdmin` - Admin flag
- `reservations` - Array of reservation IDs

## Available Scripts

### Frontend (project root)

| Command | Description |
|---|---|
| `npm start` | Start the development server on port 3000 |
| `npm run build` | Build the production bundle |
| `npm test` | Run the test suite |
| `npm run eject` | Eject from Create React App (irreversible) |

### Backend (`booking-api/`)

| Command | Description |
|---|---|
| `npm start` | Start the API server with nodemon (auto-reload on changes) |

## Screenshots

### Homepage
![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

Browse featured cities, property types, and top-rated stays from the landing page.

### Search Results
![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

Search by city, check-in/check-out dates, and guest count to find available hotels.

### Hotel Details
![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

View hotel information, photos, pricing, and guest reviews before making a reservation.

### Reservation Management
![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

Manage current and past reservations with the ability to cancel upcoming bookings.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
