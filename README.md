# 🏨 Booking App

A full-stack hotel and property booking platform built with **React** on the frontend and **Express.js / MongoDB** on the backend. Users can browse properties across multiple cities, search by destination and dates, make room reservations, leave reviews, and manage their bookings — all backed by JWT-based authentication.

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Key Features

- **User Authentication** — Register and log in with secure JWT-based authentication; passwords hashed with bcryptjs.
- **Hotel & Property Browsing** — Explore properties across cities like New York, London, Berlin, Seattle, Budapest, and more.
- **Search with Filters** — Search by city, check-in/check-out dates, and guest count (adults, children, rooms).
- **Room Reservation System** — Reserve specific rooms with date-based availability tracking; view, manage, and cancel reservations.
- **User Reviews** — Leave ratings (0–10) and written reviews on hotels; browse reviews from other guests.
- **Featured Properties** — Highlighted top-rated and featured properties on the home page.
- **Property Type Views** — Browse by property type: hotels, apartments, villas, resorts, and more with count-by-type aggregation.
- **City Guides** — Dedicated pages for cities with local recommendations and featured imagery.

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI framework |
| React Router DOM | 6.14.2 | Client-side routing |
| React Bootstrap | 2.8.0 | UI component library |
| Bootstrap | 5.3.1 | CSS framework |
| Axios | 1.4.0 | HTTP client |
| Swiper | 10.2.0 | Image carousels / sliders |
| react-date-range | 1.4.0 | Date range picker |
| react-toastify | 9.1.3 | Toast notifications |
| date-fns | 2.30.0 | Date utility functions |
| react-icons | 4.10.1 | Icon library |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express.js | 4.18.2 | Web framework |
| MongoDB | 5.7.0 | Database driver |
| Mongoose | 7.4.1 | MongoDB ODM |
| jsonwebtoken | 9.0.1 | JWT authentication |
| bcryptjs | 2.4.3 | Password hashing |
| cookie-parser | 1.4.6 | Cookie parsing middleware |
| cors | 2.8.5 | Cross-origin resource sharing |
| dotenv | 16.3.1 | Environment variable management |

## 📁 Project Structure

```
booking-app/
├── public/                     # Static assets (index.html, favicon, etc.)
├── src/                        # React frontend source
│   ├── assets/                 # Images (city photos, property images, etc.)
│   ├── components/             # Reusable UI components
│   │   ├── featured/           # Featured properties section
│   │   ├── footer/             # Site footer
│   │   ├── guestLove/          # Guest favorites / top-rated section
│   │   ├── header/             # Main header with search
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listing
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Review display component
│   │   └── searchItem/         # Search result item
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state management
│   │   └── SearchContext.jsx   # Search parameters state management
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Generic data-fetching hook
│   ├── pages/                  # Page-level components
│   │   ├── city/               # City guide pages (Hanoi, London, Berlin, etc.)
│   │   ├── home/               # Home page
│   │   ├── hotel/              # Hotel detail page
│   │   ├── list/               # Search results list
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations management
│   ├── App.js                  # Root component with route definitions
│   └── index.js                # Application entry point
├── booking-api/                # Express.js backend
│   ├── api/
│   │   ├── controllers/        # Route handler logic
│   │   │   ├── auth.js         # Register & login handlers
│   │   │   ├── hotel.js        # Hotel CRUD & query handlers
│   │   │   ├── reservation.js  # Reservation CRUD handlers
│   │   │   ├── review.js       # Review handlers
│   │   │   ├── room.js         # Room CRUD & availability handlers
│   │   │   └── user.js         # User CRUD handlers
│   │   ├── models/             # Mongoose schemas
│   │   │   ├── hotel.js        # Hotel model
│   │   │   ├── reservation.js  # Reservation model
│   │   │   ├── review.js       # Review model
│   │   │   ├── room.js         # Room model
│   │   │   └── user.js         # User model
│   │   ├── routes/             # Express route definitions
│   │   │   ├── auth.js         # /api/auth routes
│   │   │   ├── hotel.js        # /api/hotels routes
│   │   │   ├── reservation.js  # /api/reservation routes
│   │   │   ├── review.js       # /api/review routes
│   │   │   ├── room.js         # /api/room routes
│   │   │   └── user.js         # /api/user routes
│   │   └── utils/              # Utility modules
│   │       ├── error.js        # Custom error creator
│   │       └── verifyToken.js  # JWT verification middleware
│   ├── index.js                # Server entry point
│   └── package.json            # Backend dependencies
└── package.json                # Frontend dependencies
```

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** — A running MongoDB instance (local or cloud, e.g. [MongoDB Atlas](https://www.mongodb.com/atlas))
- **npm** (comes with Node.js)

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd booking-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `booking-api/` directory:

   ```env
   MONGO=your_mongodb_connection_string
   JWT=your_jwt_secret_key
   PORT=5050
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The API will be running at `http://localhost:5050`.

### Frontend Setup

1. From the project root directory, install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`.

> **Note:** Make sure the backend is running before starting the frontend so API calls can resolve correctly.

## 🔐 Environment Variables

The backend requires the following environment variables (defined in `booking-api/.env`):

| Variable | Description | Example |
|---|---|---|
| `MONGO` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/booking` |
| `JWT` | Secret key for signing JSON Web Tokens | `my_super_secret_key` |
| `PORT` | Port the server listens on (optional, defaults to 5050) | `5050` |

## 📜 Available Scripts

### Frontend (project root)

| Command | Description |
|---|---|
| `npm start` | Starts the React development server on port 3000 |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs the test suite with Jest and React Testing Library |
| `npm run eject` | Ejects from Create React App (one-way operation) |

### Backend (`booking-api/`)

| Command | Description |
|---|---|
| `npm start` | Starts the Express server with nodemon (auto-restart on changes) |

## 🌐 API Endpoints

All API routes are prefixed with `/api`. The backend runs on port **5050** by default.

### Auth (`/api/auth`)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in and receive a JWT |

### Users (`/api/user`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/user` | Get all users |
| `GET` | `/api/user/:id` | Get a user by ID |
| `PUT` | `/api/user/:id` | Update a user |
| `DELETE` | `/api/user/:id` | Delete a user |

### Hotels (`/api/hotels`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/hotels` | Get all hotels (supports query filters) |
| `GET` | `/api/hotels/:id` | Get a hotel by ID |
| `POST` | `/api/hotels` | Create a new hotel |
| `PUT` | `/api/hotels/:id` | Update a hotel |
| `DELETE` | `/api/hotels/:id` | Delete a hotel |
| `GET` | `/api/hotels/countByCity` | Get hotel counts grouped by city |
| `GET` | `/api/hotels/countByType` | Get hotel counts grouped by property type |
| `GET` | `/api/hotels/room/:id` | Get all rooms for a specific hotel |

### Rooms (`/api/room`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/room` | Get all rooms |
| `POST` | `/api/room/:hotelid` | Create a room for a hotel |
| `PUT` | `/api/room/:id` | Update a room |
| `PUT` | `/api/room/availability/:id` | Update room availability (date-based) |
| `DELETE` | `/api/room/:id/:hotelid` | Delete a room from a hotel |

### Reservations (`/api/reservation`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/reservation` | Get all reservations |
| `GET` | `/api/reservation/:id` | Get a reservation by ID |
| `GET` | `/api/reservation/find/:userId` | Get all reservations for a user |
| `POST` | `/api/reservation/:userId` | Create a reservation for a user |
| `PUT` | `/api/reservation/:id` | Update a reservation |
| `DELETE` | `/api/reservation/:id/:userId` | Delete (cancel) a reservation |

### Reviews (`/api/review`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/review` | Get all reviews |
| `GET` | `/api/review/:id` | Get a review by ID |
| `GET` | `/api/review/hotel/:id` | Get all reviews for a hotel |
| `POST` | `/api/review` | Create a new review |

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please make sure your code follows the existing style and that the application still runs correctly before submitting.

## 📄 License

This project is licensed under the **ISC License** — see the backend `package.json` for details.


