# Booking App — Hotel Booking Web Application

A full-stack hotel booking web application built with a **React 18** frontend and an **Express.js / Node.js** backend, using **MongoDB** as the database. Users can browse hotels across various cities, search for available rooms, make and manage reservations, leave reviews, and explore city-specific travel pages.

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
  - [Auth](#auth---apiauth)
  - [Users](#users---apiuser)
  - [Hotels](#hotels---apihotels)
  - [Rooms](#rooms---apiroom)
  - [Reservations](#reservations---apireservation)
  - [Reviews](#reviews---apireview)
- [Available Scripts](#available-scripts)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features

- **Hotel Search & Browsing** — Search for hotels by city, dates, and number of guests; browse results with filters.
- **Room Reservation** — Select a hotel, view available rooms, and reserve rooms for specific dates.
- **User Authentication** — Register a new account and log in with secure password hashing and JWT-based session management.
- **Hotel Reviews** — Authenticated users can leave ratings and comments for hotels they have visited.
- **City-Specific Pages** — Dedicated travel pages for cities including Los Angeles, New York, Berlin, London, Seattle, Hanoi, Budapest, Tucson, and Dong Ha with local highlights and recommendations.
- **Featured Properties & Property Listings** — Homepage showcases featured hotels and categorized property types (hotels, apartments, resorts, villas, cabins).
- **Reservation Management** — View current and past reservations with the ability to cancel upcoming bookings.

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | ^18.2.0 | UI library |
| React Router | ^6.14.2 | Client-side routing |
| React Bootstrap | ^2.8.0 | UI component library |
| Axios | ^1.4.0 | HTTP client |
| date-fns | ^2.30.0 | Date utility functions |
| react-date-range | ^1.4.0 | Date range picker component |
| react-toastify | ^9.1.3 | Toast notifications |
| Swiper | ^10.2.0 | Touch slider / carousel |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express.js | ^4.18.2 | Web framework |
| Node.js | 14.x+ | Runtime environment |
| MongoDB | ^5.7.0 | Database driver |
| Mongoose | ^7.4.1 | MongoDB ODM |
| jsonwebtoken (JWT) | ^9.0.1 | Authentication tokens |
| bcryptjs | ^2.4.3 | Password hashing |
| cookie-parser | ^1.4.6 | Cookie handling middleware |
| CORS | ^2.8.5 | Cross-origin resource sharing |
| dotenv | ^16.3.1 | Environment variable management |

---

## Project Structure

```
booking-app/
├── public/                          # Static assets (index.html, favicon, etc.)
├── src/                             # Frontend source code
│   ├── assets/                      # Static assets (images, etc.)
│   ├── components/                  # Reusable UI components
│   │   ├── featured/                # Featured cities section
│   │   ├── footer/                  # Footer component
│   │   ├── guestLove/               # Guest favorites section
│   │   ├── header/                  # Header with search bar
│   │   ├── navbar/                  # Navigation bar
│   │   ├── propertyList/            # Property type listings & slider
│   │   ├── reserve/                 # Room reservation modal
│   │   ├── review/                  # Review display & review cards
│   │   └── searchItem/              # Hotel search result card
│   ├── context/                     # React Context providers
│   │   ├── AuthContext.jsx          # Authentication state management
│   │   └── SearchContext.jsx        # Search criteria state management
│   ├── hooks/                       # Custom React hooks
│   │   └── useFetch.js             # Reusable data-fetching hook
│   ├── pages/                       # Page-level components
│   │   ├── city/                    # City pages (LA, New York, Berlin, etc.)
│   │   ├── home/                    # Homepage
│   │   ├── hotel/                   # Single hotel detail page
│   │   ├── list/                    # Hotel search results page
│   │   ├── login/                   # Login page
│   │   ├── register/                # Registration page
│   │   └── reservation/             # User reservations page
│   ├── App.js                       # Root component with route definitions
│   └── index.js                     # Application entry point
├── booking-api/                     # Backend source code
│   ├── api/
│   │   ├── controllers/             # Route handler logic
│   │   │   ├── auth.js              # Register & login controllers
│   │   │   ├── hotel.js             # Hotel CRUD controllers
│   │   │   ├── reservation.js       # Reservation CRUD controllers
│   │   │   ├── review.js            # Review controllers
│   │   │   ├── room.js              # Room CRUD controllers
│   │   │   └── user.js              # User CRUD controllers
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── hotel.js             # Hotel model
│   │   │   ├── reservation.js       # Reservation model
│   │   │   ├── review.js            # Review model
│   │   │   ├── room.js              # Room model
│   │   │   └── user.js              # User model
│   │   ├── routes/                  # Express route definitions
│   │   │   ├── auth.js              # /api/auth routes
│   │   │   ├── hotel.js             # /api/hotels routes
│   │   │   ├── reservation.js       # /api/reservation routes
│   │   │   ├── review.js            # /api/review routes
│   │   │   ├── room.js              # /api/room routes
│   │   │   └── user.js              # /api/user routes
│   │   └── utils/                   # Utility functions
│   │       ├── error.js             # Custom error creator
│   │       └── verifyToken.js       # JWT verification middleware
│   ├── index.js                     # Server entry point
│   └── package.json                 # Backend dependencies
└── package.json                     # Frontend dependencies
```

---

## Prerequisites

Make sure the following software is installed on your machine before proceeding:

- **Node.js** — v14 or higher ([https://nodejs.org](https://nodejs.org))
- **npm** — Comes bundled with Node.js
- **MongoDB** — A running MongoDB instance (local or cloud via [MongoDB Atlas](https://www.mongodb.com/atlas))

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Backend Setup

```bash
# Navigate to the backend directory
cd booking-api

# Install dependencies
npm install
```

Create a `.env` file inside the `booking-api/` directory with the following variables:

```env
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret_key
PORT=5050
```

| Variable | Description |
|---|---|
| `MONGO` | MongoDB connection string (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/booking`) |
| `JWT` | Secret key used to sign and verify JSON Web Tokens |
| `PORT` | Port for the Express server (defaults to `5050` if not set) |

Start the backend server:

```bash
npm start
```

The API server will be running at **http://localhost:5050**.

### 3. Frontend Setup

```bash
# Navigate back to the project root
cd ..

# Install dependencies
npm install
```

Start the frontend development server:

```bash
npm start
```

The application will be running at **http://localhost:3000**.

---

## API Endpoints

The backend exposes the following REST API routes. All routes are prefixed with `/api`.

### Auth — `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in and receive an authentication cookie |

### Users — `/api/user`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/user` | Get all users |
| `GET` | `/api/user/:id` | Get a specific user by ID |
| `PUT` | `/api/user/:id` | Update a user by ID |
| `DELETE` | `/api/user/:id` | Delete a user by ID |

### Hotels — `/api/hotels`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/hotels` | Get all hotels (supports query filters) |
| `GET` | `/api/hotels/:id` | Get a specific hotel by ID |
| `POST` | `/api/hotels` | Create a new hotel |
| `PUT` | `/api/hotels/:id` | Update a hotel by ID |
| `DELETE` | `/api/hotels/:id` | Delete a hotel by ID |
| `GET` | `/api/hotels/countByCity` | Get hotel counts grouped by city |
| `GET` | `/api/hotels/countByType` | Get hotel counts grouped by property type |
| `GET` | `/api/hotels/room/:id` | Get all rooms for a specific hotel |

### Rooms — `/api/room`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/room` | Get all rooms |
| `POST` | `/api/room/:hotelid` | Create a new room for a hotel |
| `PUT` | `/api/room/:id` | Update a room by ID |
| `PUT` | `/api/room/availability/:id` | Update room availability (dates) |
| `DELETE` | `/api/room/:id/:hotelid` | Delete a room by ID from a hotel |

### Reservations — `/api/reservation`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/reservation` | Get all reservations |
| `GET` | `/api/reservation/:id` | Get a specific reservation by ID |
| `GET` | `/api/reservation/find/:userId` | Get all reservations for a user |
| `POST` | `/api/reservation/:userId` | Create a reservation for a user |
| `PUT` | `/api/reservation/:id` | Update a reservation by ID |
| `DELETE` | `/api/reservation/:id/:userId` | Delete a reservation by ID |

### Reviews — `/api/review`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/review` | Get all reviews |
| `GET` | `/api/review/:id` | Get a specific review by ID |
| `GET` | `/api/review/hotel/:id` | Get all reviews for a specific hotel |
| `POST` | `/api/review` | Create a new review |

---

## Available Scripts

### Frontend

Run these commands from the **project root** directory:

| Command | Description |
|---|---|
| `npm start` | Starts the React development server on `http://localhost:3000` |
| `npm run build` | Builds the app for production into the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects the Create React App configuration (irreversible) |

### Backend

Run these commands from the **`booking-api/`** directory:

| Command | Description |
|---|---|
| `npm start` | Starts the Express server using nodemon for auto-reloading |

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with clear, descriptive messages:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch with a detailed description of your changes.

Please make sure your code follows the existing project conventions and that any new features include appropriate documentation.

---

## License

This project is licensed under the **ISC License**.


