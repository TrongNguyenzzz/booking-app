# Hotel Booking Management System

A full-stack hotel booking web application that allows users to search for hotels, make reservations, manage bookings, and explore city guides. Built with React and Node.js/Express, backed by MongoDB.

[![Demo Video](https://img.shields.io/badge/Demo-YouTube-red?logo=youtube)](https://youtu.be/HBzZPsiOX20)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## Features

- **User Authentication** -- Register and log in with JWT-based authentication and secure password hashing
- **Hotel Search** -- Search hotels by city, check-in/check-out dates, and guest count
- **Hotel Details** -- View hotel photos, descriptions, pricing, and guest reviews
- **Room Reservation** -- Reserve rooms through an interactive modal interface
- **Reservation Management** -- View current and past reservations; cancel upcoming bookings
- **Guest Reviews** -- Read reviews from other guests for each hotel
- **City Guides** -- Explore nine city pages (Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, London) with photos and local recommendations
- **Property Browsing** -- Browse by property type: Hotels, Apartments, Resorts, and Villas
- **Top-Rated Places** -- "Guests Love" section highlighting the best-rated accommodations

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Bootstrap 5 / React-Bootstrap | Responsive layout and components |
| Axios | HTTP client for API calls |
| react-date-range | Date picker for booking |
| date-fns | Date utility functions |
| Swiper | Image and content sliders |
| react-toastify | Toast notifications |
| react-icons / Font Awesome | Icon sets |

### Backend

| Technology | Purpose |
|---|---|
| Node.js / Express | REST API server |
| MongoDB / Mongoose | Database and ODM |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |
| CORS | Cross-origin resource sharing |
| dotenv | Environment variable management |
| nodemon | Development auto-reload |

---

## Project Structure

```
booking-app/
├── booking-api/              # Backend Express API
│   ├── index.js              # Entry point (Express server, MongoDB connection)
│   ├── package.json          # API dependencies
│   ├── api/
│   │   ├── controllers/      # Route handlers
│   │   │   ├── auth.js       # Authentication (login/register)
│   │   │   ├── user.js       # User management
│   │   │   ├── hotel.js      # Hotel CRUD
│   │   │   ├── room.js       # Room management
│   │   │   ├── reservation.js# Booking management
│   │   │   └── review.js     # Hotel reviews
│   │   ├── models/           # Mongoose schemas
│   │   │   ├── user.js
│   │   │   ├── hotel.js
│   │   │   ├── room.js
│   │   │   ├── reservation.js
│   │   │   └── review.js
│   │   ├── routes/           # Express route definitions
│   │   │   ├── auth.js
│   │   │   ├── user.js
│   │   │   ├── hotel.js
│   │   │   ├── room.js
│   │   │   ├── reservation.js
│   │   │   └── review.js
│   │   └── utils/
│   │       ├── verifyToken.js# JWT middleware
│   │       └── error.js      # Error handler utility
│   └── README.md
├── src/                      # Frontend React app
│   ├── index.js              # React entry point
│   ├── App.js                # Router configuration
│   ├── context/
│   │   ├── AuthContext.jsx   # Authentication state
│   │   └── SearchContext.jsx # Search state
│   ├── pages/
│   │   ├── home/             # Landing page
│   │   ├── login/            # Login page
│   │   ├── register/         # Registration page
│   │   ├── list/             # Hotel search results
│   │   ├── hotel/            # Individual hotel details
│   │   ├── reservation/      # User reservations (view/cancel)
│   │   └── city/             # City info pages
│   └── components/
│       ├── header/           # Navigation header
│       ├── propertyList/     # Property type browsing with sliders
│       ├── searchItem/       # Hotel search result card
│       ├── guestLove/        # Top-rated places
│       ├── reserve/          # Room reservation modal
│       └── review/           # Hotel reviews
├── public/                   # Static assets
├── package.json              # Frontend dependencies
├── .env.production           # Production env (Vercel analytics)
└── .gitignore
```

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)
- **MongoDB** -- either a local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cloud cluster

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Set Up the Backend

```bash
cd booking-api
npm install
```

Create a `.env` file inside the `booking-api/` directory with the required environment variables (see [Environment Variables](#environment-variables) below).

Start the API server:

```bash
npm start
```

The backend will run at **http://localhost:5050**.

### 3. Set Up the Frontend

Open a new terminal window, then from the project root:

```bash
npm install
npm start
```

The frontend will run at **http://localhost:3000**.

### 4. Open the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your browser. Make sure the backend server is running so the frontend can communicate with the API.

---

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description | Example |
|---|---|---|
| `MONGO` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `your_jwt_secret_key` |

### Frontend (`.env.production`)

| Variable | Description |
|---|---|
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel Analytics ID (optional, for production deployment) |

---

## API Endpoints

| Endpoint | Description |
|---|---|
| `/api/auth` | User authentication (login, register) |
| `/api/user` | User management operations |
| `/api/hotels` | Hotel CRUD operations (create, read, update, delete) |
| `/api/room` | Room management |
| `/api/reservation` | Reservation CRUD (create, view, cancel) |
| `/api/review` | Hotel reviews |

All protected routes require a valid JWT token sent via cookies.

---

## Screenshots

### Home Page

Browse featured cities, property types, and top-rated places from the landing page.

![Home Page](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Search Results

Search by city, dates, and guest count to find available hotels with pricing details.

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Details

View hotel information including name, address, description, pricing, and guest reviews.

![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservations

Manage your bookings -- view current and past reservations, and cancel upcoming ones.

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

---

## Demo

Watch the full walkthrough of the application:

[Hotel Booking App Demo on YouTube](https://youtu.be/HBzZPsiOX20)

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit them (`git commit -m "feat: add your feature"`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please make sure your code follows the existing style and conventions used throughout the project.

---

## License

This project is open source and available for personal and educational use.

---

## Disclaimer

All hotel information displayed in the application (names, addresses, pricing, etc.) is fictional and created for demonstration purposes only. City guide content is based on general research and may not reflect current conditions. This project is intended as a portfolio and learning exercise.
