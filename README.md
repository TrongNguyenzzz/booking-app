# Booking App — Hotel Management & Reservation System

A full-stack hotel management and reservation web application built with **React** and **Express.js**. Users can browse cities, search for hotels by destination, dates, and guest count, view hotel details and reviews, and manage their reservations — all through a clean, responsive interface.

[![Demo Video](https://img.shields.io/badge/Demo-YouTube-red?logo=youtube)](https://youtu.be/HBzZPsiOX20)

---

## Table of Contents

- [Screenshots](#screenshots)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Screenshots

### Homepage

![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Search Results

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Details

![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservations

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

---

## Demo

Watch the full walkthrough on YouTube: **[https://youtu.be/HBzZPsiOX20](https://youtu.be/HBzZPsiOX20)**

---

## Features

- **User Registration & Login** — Create an account and authenticate with JWT-based sessions.
- **City Browsing** — Explore featured cities with introductions, photos of famous places, and local dish recommendations.
- **Hotel Search** — Search hotels by city, check-in/check-out dates, and number of guests.
- **Hotel Details** — View hotel name, address, description, pricing, and guest reviews.
- **Room Reservation** — Select and reserve available rooms for your chosen dates.
- **Reservation Management** — View all past and current reservations in one place.
- **Cancellation** — Cancel current (upcoming) reservations directly from the reservations page.
- **Property Types** — Browse hotels by property category (hotels, apartments, resorts, villas, cabins).
- **Top-Rated Properties** — Discover the highest-rated places to stay.

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI framework |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [React Bootstrap](https://react-bootstrap.github.io/) / [Bootstrap 5](https://getbootstrap.com/) | UI components & styling |
| [Axios](https://axios-http.com/) | HTTP client |
| [react-date-range](https://github.com/hypeserver/react-date-range) / [date-fns](https://date-fns.org/) | Date picker & date utilities |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [Swiper](https://swiperjs.com/) | Image carousels / sliders |
| [React Icons](https://react-icons.github.io/react-icons/) / [Font Awesome](https://fontawesome.com/) | Icons |

### Backend

| Technology | Purpose |
|---|---|
| [Express.js](https://expressjs.com/) | Web framework |
| [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [JSON Web Tokens](https://jwt.io/) | Authentication |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | Cookie handling |
| [CORS](https://github.com/expressjs/cors) | Cross-origin resource sharing |
| [nodemon](https://nodemon.io/) | Development auto-restart |

---

## Project Structure

```
booking-app/
├── public/                  # Static assets (index.html, favicon, etc.)
├── src/                     # React frontend source
│   ├── assets/              # Images and static resources
│   ├── components/          # Reusable UI components
│   │   ├── featured/        # Featured cities section
│   │   ├── footer/          # Footer component
│   │   ├── guestLove/       # Top-rated properties
│   │   ├── header/          # Header / search bar
│   │   ├── navbar/          # Navigation bar
│   │   ├── propertyList/    # Property type listings
│   │   ├── reserve/         # Room reservation modal
│   │   ├── review/          # Hotel reviews
│   │   └── searchItem/      # Search result item card
│   ├── context/             # React Context providers
│   │   ├── AuthContext.jsx   # Authentication state
│   │   └── SearchContext.jsx # Search parameters state
│   ├── hooks/               # Custom React hooks
│   │   └── useFetch.js      # Data fetching hook
│   ├── pages/               # Page-level components
│   │   ├── city/            # City detail page
│   │   ├── home/            # Homepage
│   │   ├── hotel/           # Hotel detail page
│   │   ├── list/            # Search results page
│   │   ├── login/           # Login page
│   │   ├── register/        # Registration page
│   │   └── reservation/     # User reservations page
│   ├── App.js               # Root component & routes
│   └── index.js             # Application entry point
├── booking-api/             # Express.js backend
│   ├── api/
│   │   ├── controllers/     # Route handlers / business logic
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # Express route definitions
│   │   └── utils/           # Utility functions (auth, errors)
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
├── .env.production          # Production environment variables
├── package.json             # Frontend dependencies & scripts
└── README.md                # This file
```

---

## Prerequisites

Make sure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** — v14.x or higher
- **[npm](https://www.npmjs.com/)** — comes bundled with Node.js
- **[MongoDB](https://www.mongodb.com/)** — a running MongoDB instance (local or cloud, e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Install frontend dependencies

From the project root:

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd booking-api
npm install
cd ..
```

### 4. Configure environment variables

The application uses environment variables for configuration. Create a `.env` file in the **`booking-api/`** directory with the following variables:

```env
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
```

> **Note:** A `.env.production` file exists at the project root for production builds of the frontend. You may need to set `REACT_APP_API_URL` (or the equivalent variable) to point to your backend URL.

> **Security:** Never commit secrets or credentials to version control. The `.gitignore` file is already configured to exclude `.env` files.

---

## Running the App

You need to run both the backend API and the frontend development server.

### Start the backend API

```bash
cd booking-api
npm start
```

The API server will start on **http://localhost:5050** (using nodemon for auto-reload during development).

### Start the frontend

In a separate terminal, from the project root:

```bash
npm start
```

The React development server will start on **http://localhost:3000** and open in your default browser.

---

## API

The backend exposes a RESTful API from `booking-api/api/`. Key resource areas include:

| Area | Description |
|---|---|
| **Authentication** | User registration, login, and JWT token management |
| **Hotels** | CRUD operations for hotel listings, search, and filtering |
| **Rooms** | Room availability, details, and reservation management |
| **Users** | User profile and reservation history |

The API routes are organized under `booking-api/api/routes/`, with corresponding controllers in `booking-api/api/controllers/` and Mongoose models in `booking-api/api/models/`.

---

## Contributing

Contributions are welcome! To get started:

1. **Fork** the repository.
2. **Create a feature branch:** `git checkout -b feature/your-feature-name`
3. **Make your changes** and commit with clear, descriptive messages.
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. **Open a Pull Request** against the `main` branch.

Please make sure your code follows the existing style and conventions in the project. If you're fixing a bug, include steps to reproduce. If you're adding a feature, describe the use case.

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## Acknowledgments

- **Disclaimer:** All hotel names, addresses, and related business information displayed in this application are fictional and were created for demonstration purposes. They do not represent real hotels or businesses. City descriptions and cultural information are based on general research and may not be fully accurate.
- Built as a full-stack web development project to demonstrate React + Express.js + MongoDB integration.
- Thanks to the open-source community for the excellent libraries and tools that made this project possible.
