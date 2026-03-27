# Booking App - Repository Summary

## Project Overview

This is a full-stack hotel management and booking application built by [TrongNguyenzzz](https://github.com/TrongNguyenzzz/booking-app). It simulates a hotel reservation system where users can browse hotels across multiple cities, create accounts, search for accommodations, make reservations, view reviews, and manage their bookings. The application also features city introduction pages with local photography and food recommendations for each destination.

**Demo Video:** [YouTube](https://youtu.be/HBzZPsiOX20)

---

## Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **React Bootstrap / Bootstrap 5** - UI component framework and styling
- **Axios** - HTTP client for API communication
- **Swiper** - Touch slider for image carousels
- **react-date-range** / **date-fns** - Date picker and date utilities
- **react-toastify** - Toast notifications
- **react-icons** - Icon library
- **react-datalist-input** - Autocomplete input component
- **react-scripts (CRA)** - Build tooling via Create React App

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** / **Mongoose** - Database and ODM
- **JSON Web Tokens (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management
- **nodemon** - Development auto-restart (dev dependency via start script)

---

## Architecture

The project follows a classic client-server architecture with a clear separation between the React frontend and the Express/MongoDB backend.

### Backend (`booking-api/`)

The API is a RESTful Express application using ES modules (`"type": "module"`) that connects to MongoDB via Mongoose. It runs on port **5050** by default and exposes the following route groups:

| Route Prefix          | Purpose                                      |
|-----------------------|----------------------------------------------|
| `/api/auth`           | User registration and login                  |
| `/api/user`           | CRUD operations for user accounts            |
| `/api/hotels`         | CRUD for hotels, count by city/type, rooms   |
| `/api/room`           | CRUD for rooms, availability updates         |
| `/api/reservation`    | Create, read, update, delete reservations    |
| `/api/review`         | Create and retrieve hotel reviews            |

**Authentication flow:** Users register with username/email/password. Passwords are hashed with bcrypt. On login, a JWT is issued and stored as an HTTP-only cookie (`access_token`). Middleware functions (`verifyToken`, `verifyUser`, `verifyAdmin`) handle authorization checks.

**Data Models (Mongoose Schemas):**
- **User** - username, email, hashed password, isAdmin flag, reservations array
- **Hotel** - name, type, city, address, distance, photos, title, description, rating, rooms, cheapestPrice, featured flag
- **Room** - title, price, maxPeople, description, roomNumbers (with unavailable dates)
- **Reservation** - user, dates, hotel, room, hotelName, roomNumber, hotelPhoto, total
- **Review** - userid, rate (0-10), comment, hotelid, username

### Frontend (`src/`)

The React frontend runs on port **3000** and uses Create React App as its build system. It is organized as follows:

- **State Management:** Uses React Context API with `useReducer` for both authentication (`AuthContext`) and search state (`SearchContext`). Auth state is persisted to `localStorage`.
- **Data Fetching:** A custom `useFetch` hook wraps Axios for GET requests with loading/error state management.
- **Routing:** React Router v6 handles navigation between pages.

---

## Key Features

1. **User Authentication** - Register and login with secure password hashing and JWT-based sessions
2. **City Exploration** - Dedicated pages for 9 cities (Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, London) with photos of landmarks and local food recommendations
3. **Hotel Search** - Search hotels by city, date range, and number of guests (adults, children, rooms)
4. **Hotel Details** - View hotel information including name, address, description, rating, photos, and pricing
5. **Room Reservation** - Select and reserve specific rooms with date-based availability tracking
6. **Reservation Management** - View current and past reservations; cancel current reservations
7. **Reviews** - View and submit hotel reviews with ratings (0-10 scale)
8. **Property Browsing** - Browse by property type (hotels, apartments, resorts, villas) with image sliders
9. **Featured/Guest Favorites** - Highlighted properties and guest-loved accommodations on the home page

---

## Directory Structure

```
booking-app/
├── booking-api/                  # Backend API
│   ├── index.js                  # Express server entry point
│   ├── package.json              # Backend dependencies
│   └── api/
│       ├── controllers/          # Route handler logic
│       │   ├── auth.js           #   Registration and login
│       │   ├── hotel.js          #   Hotel CRUD and queries
│       │   ├── reservation.js    #   Reservation CRUD
│       │   ├── review.js         #   Review CRUD
│       │   ├── room.js           #   Room CRUD and availability
│       │   └── user.js           #   User CRUD
│       ├── models/               # Mongoose schemas
│       │   ├── hotel.js
│       │   ├── reservation.js
│       │   ├── review.js
│       │   ├── room.js
│       │   └── user.js
│       ├── routes/               # Express route definitions
│       │   ├── auth.js
│       │   ├── hotel.js
│       │   ├── reservation.js
│       │   ├── review.js
│       │   ├── room.js
│       │   └── user.js
│       └── utils/
│           ├── error.js          # Custom error helper
│           └── verifyToken.js    # JWT auth middleware
├── public/                       # Static assets (index.html, favicon, etc.)
├── src/                          # Frontend React application
│   ├── index.js                  # React entry point (renders App with providers)
│   ├── App.js                    # Root component with route definitions
│   ├── App.css                   # Global styles
│   ├── assets/                   # Images (city photos, food, hotels, properties, reviews)
│   │   ├── cityImg/              #   City thumbnail images
│   │   ├── pageCity/             #   Per-city photo galleries and food images
│   │   ├── propertyImg/          #   Property type slider images
│   │   ├── reviewImg/            #   Review avatar images
│   │   └── hotellogo.png         #   Site logo
│   ├── components/               # Reusable UI components
│   │   ├── featured/             #   Featured cities section
│   │   ├── footer/               #   Site footer
│   │   ├── guestLove/            #   Guest favorites section
│   │   ├── header/               #   Search header with date/guest pickers
│   │   ├── navbar/               #   Navigation bar
│   │   ├── propertyList/         #   Property type browser with Swiper sliders
│   │   ├── reserve/              #   Room reservation modal
│   │   ├── review/               #   Review display and submission
│   │   └── searchItem/           #   Hotel search result card
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.jsx       #   Authentication state (login/logout/register)
│   │   └── SearchContext.jsx     #   Search parameters state
│   ├── hooks/
│   │   └── useFetch.js           #   Custom data fetching hook (Axios + state)
│   └── pages/                    # Page-level components
│       ├── city/                 #   Individual city pages (9 cities)
│       ├── home/                 #   Home page
│       ├── hotel/                #   Single hotel detail page
│       ├── list/                 #   Hotel search results page
│       ├── login/                #   Login page
│       ├── register/             #   Registration page
│       └── reservation/          #   User reservations page
├── package.json                  # Frontend dependencies and scripts
├── .env.production               # Production environment variables
└── README.md                     # Project documentation
```

---

## How to Run

### Prerequisites
- Node.js installed
- A MongoDB instance (local or cloud, e.g., MongoDB Atlas)

### Backend (API)

1. Navigate to the API directory:
   ```bash
   cd booking-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `booking-api/` with:
   ```
   MONGO=<your-mongodb-connection-string>
   JWT=<your-jwt-secret>
   PORT=5050
   ```
4. Start the API server:
   ```bash
   npm start
   ```
   The API will run at `http://localhost:5050`.

### Frontend (Client)

1. From the project root directory, install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

> **Note:** The backend API must be running before the frontend can fetch data. Make sure both servers are running simultaneously.
