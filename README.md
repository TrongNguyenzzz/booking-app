# Booking App

A full-stack hotel booking application built with **React** and **Express.js**. Users can search for hotels by destination, select travel dates and guest options, browse hotel listings, view detailed hotel information with reviews, and make room reservations — all backed by a RESTful API with JWT-based authentication.

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 18.2.0 | UI library |
| React Router | 6.14.2 | Client-side routing |
| React Bootstrap | 2.8.0 | UI components |
| Axios | 1.4.0 | HTTP client |
| date-fns | 2.30.0 | Date utilities |
| react-date-range | 1.4.0 | Date range picker |
| Swiper | 10.2.0 | Image carousel / slider |
| react-toastify | 9.1.3 | Toast notifications |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Express.js | 4.18.2 | Web framework |
| MongoDB / Mongoose | 7.4.1 | Database / ODM |
| jsonwebtoken | 9.0.1 | JWT authentication |
| bcryptjs | 2.4.3 | Password hashing |
| cookie-parser | 1.4.6 | Cookie handling |
| cors | 2.8.5 | Cross-origin resource sharing |
| dotenv | 16.3.1 | Environment variable management |

## Key Features

- **Hotel Search** — Search by destination, date range, and guest options (adults, children, rooms)
- **Hotel Listing & Detail Pages** — Browse available hotels with photos, descriptions, ratings, and pricing
- **Room Reservation System** — Select rooms, pick dates, and complete reservations; view and cancel upcoming reservations
- **User Authentication** — Registration and login with hashed passwords and JWT tokens
- **User Reviews** — Read and submit reviews with ratings for hotels
- **City Guides** — Dedicated pages for featured cities with local recommendations

## Project Structure

```
booking-app/
├── public/                          # Static assets
├── src/                             # Frontend source
│   ├── pages/
│   │   ├── home/                    # Home page
│   │   ├── hotel/                   # Hotel detail page
│   │   ├── list/                    # Hotel search results
│   │   ├── login/                   # Login page
│   │   ├── register/                # Registration page
│   │   ├── reservation/             # User reservations page
│   │   └── city/                    # City guide pages
│   ├── components/
│   │   ├── navbar/                  # Navigation bar
│   │   ├── header/                  # Header with search
│   │   ├── reserve/                 # Room reservation modal
│   │   ├── review/                  # Hotel reviews
│   │   ├── featured/                # Featured hotels
│   │   ├── propertyList/            # Property type listings
│   │   ├── guestLove/               # Guest favorites
│   │   ├── searchItem/              # Search result item
│   │   └── footer/                  # Footer
│   ├── context/
│   │   ├── AuthContext.jsx          # Authentication state
│   │   └── SearchContext.jsx        # Search parameters state
│   ├── hooks/
│   │   └── useFetch.js              # Custom data-fetching hook
│   ├── assets/                      # Images and static resources
│   ├── App.js                       # Root component with routes
│   └── index.js                     # Entry point
├── booking-api/                     # Backend source
│   ├── index.js                     # Express server entry point
│   ├── api/
│   │   ├── routes/
│   │   │   ├── auth.js              # Authentication routes
│   │   │   ├── user.js              # User CRUD routes
│   │   │   ├── hotel.js             # Hotel CRUD routes
│   │   │   ├── room.js              # Room CRUD routes
│   │   │   ├── reservation.js       # Reservation CRUD routes
│   │   │   └── review.js            # Review routes
│   │   ├── controllers/
│   │   │   ├── auth.js              # Auth logic
│   │   │   ├── user.js              # User logic
│   │   │   ├── hotel.js             # Hotel logic
│   │   │   ├── room.js              # Room logic
│   │   │   ├── reservation.js       # Reservation logic
│   │   │   └── review.js            # Review logic
│   │   ├── models/
│   │   │   ├── user.js              # User schema
│   │   │   ├── hotel.js             # Hotel schema
│   │   │   ├── room.js              # Room schema
│   │   │   ├── reservation.js       # Reservation schema
│   │   │   └── review.js            # Review schema
│   │   └── utils/
│   │       ├── verifyToken.js       # JWT verification middleware
│   │       └── error.js             # Error handling utility
│   └── package.json
└── package.json
```

## Prerequisites

- **Node.js** 14.x or later
- **MongoDB** instance (local or hosted, e.g. MongoDB Atlas)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Set up the backend

```bash
cd booking-api
npm install
```

Create a `.env` file in the `booking-api/` directory (see [Environment Variables](#environment-variables) below), then start the server:

```bash
npm start
```

The API server starts on **http://localhost:5050** by default (uses `nodemon` for automatic restarts during development).

### 3. Set up the frontend

From the project root:

```bash
npm install
npm start
```

The React development server starts on **http://localhost:3000**.

## Available Scripts

### Frontend (`/`)

| Script | Command | Description |
|---|---|---|
| `start` | `react-scripts start` | Start the development server |
| `build` | `react-scripts build` | Create a production build |
| `test` | `react-scripts test` | Run the test suite |
| `eject` | `react-scripts eject` | Eject from Create React App |

### Backend (`/booking-api`)

| Script | Command | Description |
|---|---|---|
| `start` | `nodemon index.js` | Start the API server with hot-reload |

## API Endpoints

All API routes are prefixed with `/api`.

### Auth (`/api/auth`)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/register` | Register a new user |
| `POST` | `/login` | Log in an existing user |

### Users (`/api/user`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all users |
| `GET` | `/:id` | Get a user by ID |
| `PUT` | `/:id` | Update a user |
| `DELETE` | `/:id` | Delete a user |

### Hotels (`/api/hotels`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all hotels |
| `GET` | `/:id` | Get a hotel by ID |
| `POST` | `/` | Create a new hotel |
| `PUT` | `/:id` | Update a hotel |
| `DELETE` | `/:id` | Delete a hotel |
| `GET` | `/countByCity` | Get hotel counts by city |
| `GET` | `/countByType` | Get hotel counts by property type |
| `GET` | `/room/:id` | Get all rooms for a hotel |

### Rooms (`/api/room`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all rooms |
| `POST` | `/:hotelid` | Create a room for a hotel |
| `PUT` | `/:id` | Update a room |
| `PUT` | `/availability/:id` | Update room availability dates |
| `DELETE` | `/:id/:hotelid` | Delete a room from a hotel |

### Reservations (`/api/reservation`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all reservations |
| `GET` | `/:id` | Get a reservation by ID |
| `GET` | `/find/:userId` | Get all reservations for a user |
| `POST` | `/:userId` | Create a reservation for a user |
| `PUT` | `/:id` | Update a reservation |
| `DELETE` | `/:id/:userId` | Delete a reservation |

### Reviews (`/api/review`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all reviews |
| `GET` | `/:id` | Get a review by ID |
| `GET` | `/hotel/:id` | Get all reviews for a hotel |
| `POST` | `/` | Create a new review |

## Environment Variables

Create a `.env` file in the `booking-api/` directory with the following variables:

```env
MONGO=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=5050
```

| Variable | Description | Default |
|---|---|---|
| `MONGO` | MongoDB connection string (e.g. `mongodb+srv://user:pass@cluster.mongodb.net/booking`) | — |
| `JWT_SECRET` | Secret key used for signing JWT tokens | — |
| `PORT` | Port the API server listens on | `5050` |

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Please make sure your code follows the existing project conventions and include relevant tests when applicable.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).


