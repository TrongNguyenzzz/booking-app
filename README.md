# Hotel Booking Application

A full-stack hotel management and booking system that allows users to explore cities, search for hotels, make reservations, and manage their bookings. Built with React on the frontend and Express.js with MongoDB on the backend.

## Demo

https://youtu.be/HBzZPsiOX20?feature=shared

## Screenshots

![Screenshot 2023-08-28 at 10 34 45 PM](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

![Screenshot 2023-08-28 at 10 41 33 PM](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

![Screenshot 2023-08-28 at 10 42 42 PM](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

![Screenshot 2023-08-28 at 10 45 42 PM](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Tech Stack

### Frontend

- React 18
- React Router v6
- React Bootstrap
- Axios
- Swiper
- react-date-range
- date-fns
- react-toastify
- react-datalist-input
- react-icons
- CSS

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication (jsonwebtoken)
- bcryptjs
- cookie-parser
- cors
- dotenv

## Architecture Overview

The application follows a client-server architecture:

- **Frontend**: A React single-page application that communicates with the backend REST API. State management is handled through React Context API with two contexts: `AuthContext` (user authentication state) and `SearchContext` (search parameters). A custom `useFetch` hook provides a reusable pattern for data fetching via Axios.
- **Backend**: An Express.js REST API using the MVC pattern (models, controllers, routes). Data is stored in MongoDB via Mongoose ODM. The backend uses ES modules (`"type": "module"` in package.json).
- **Authentication**: Users register with a username, email, and password. Passwords are hashed with bcryptjs. On login, a JWT is generated and set as an httpOnly cookie named `access_token`. The `verifyToken` middleware is defined in `utils/verifyToken.js` and imported in several route files, but it is not currently applied to any route handler. All API routes are effectively unprotected.
- **API base URL**: The frontend has the API base URL hardcoded to `http://localhost:5050`.

## Project Structure

```
booking-app/
├── public/                          # Static assets (favicon, index.html, manifest)
├── src/                             # React frontend source
│   ├── App.js                       # Root component with route definitions
│   ├── index.js                     # Entry point with context providers
│   ├── assets/
│   │   ├── cityImg/                 # City thumbnail images
│   │   ├── pageCity/                # City page images and food photos
│   │   ├── hotellogo.png            # Hotel logo
│   │   └── reviewImg/               # Review-related images
│   ├── components/
│   │   ├── featured/                # Featured properties section
│   │   ├── footer/                  # Footer component
│   │   ├── guestLove/               # Guest favorites section
│   │   ├── header/                  # Header with search bar
│   │   ├── navbar/                  # Navigation bar
│   │   ├── propertyList/            # Property type listing with slider
│   │   ├── reserve/                 # Room reservation modal
│   │   ├── review/                  # Hotel review component
│   │   └── searchItem/              # Search result item
│   ├── context/
│   │   ├── AuthContext.jsx           # Authentication state context
│   │   └── SearchContext.jsx         # Search parameters context
│   ├── hooks/
│   │   └── useFetch.js              # Custom hook for API data fetching
│   └── pages/
│       ├── home/                    # Home page
│       ├── hotel/                   # Hotel detail page
│       ├── list/                    # Hotel search results page
│       ├── login/                   # Login page
│       ├── register/                # Registration page
│       ├── reservation/             # Reservation management page
│       └── city/                    # City exploration pages
│           ├── Hanoi.jsx
│           ├── Dongha.jsx
│           ├── Tucson.jsx
│           ├── Budapest.jsx
│           ├── Newyork.jsx
│           ├── LA.jsx
│           ├── Seattle.jsx
│           ├── Berlin.jsx
│           └── London.jsx
├── booking-api/                     # Express.js backend
│   ├── index.js                     # Server entry point, route mounting, port config
│   ├── package.json                 # Backend dependencies (ES modules)
│   └── api/
│       ├── controllers/
│       │   ├── auth.js              # Register and login logic
│       │   ├── hotel.js             # Hotel CRUD and queries
│       │   ├── reservation.js       # Reservation CRUD
│       │   ├── review.js            # Review CRUD
│       │   ├── room.js              # Room CRUD and availability
│       │   └── user.js              # User CRUD
│       ├── models/
│       │   ├── hotel.js             # Hotel schema
│       │   ├── reservation.js       # Reservation schema
│       │   ├── review.js            # Review schema
│       │   ├── room.js              # Room schema
│       │   └── user.js              # User schema
│       ├── routes/
│       │   ├── auth.js              # Auth routes
│       │   ├── hotel.js             # Hotel routes
│       │   ├── reservation.js       # Reservation routes
│       │   ├── review.js            # Review routes
│       │   ├── room.js              # Room routes
│       │   └── user.js              # User routes
│       └── utils/
│           ├── error.js             # Custom error creator
│           └── verifyToken.js       # JWT auth middleware
├── package.json                     # Frontend dependencies
├── .env.production                  # Vercel analytics config
└── .gitignore
```

## Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB (local instance or cloud service such as MongoDB Atlas)
- nodemon (installed globally via `npm install -g nodemon` — required for the backend start script but not listed in backend dependencies)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/TrongNguyenzzz/booking-app.git
   cd booking-app
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd booking-api
   npm install
   ```

4. **Create a `.env` file in `booking-api/`**

   ```env
   MONGO=<your-mongodb-connection-string>
   JWT=<your-jwt-secret-key>
   PORT=5050
   ```

   `PORT` is optional and defaults to `5050` if not set.

## Running the Application

1. **Start the backend**

   ```bash
   cd booking-api
   npm start
   ```

   The API server runs on http://localhost:5050. The start script uses `nodemon` for auto-reload, which must be installed globally (see Prerequisites).

2. **Start the frontend** (in a separate terminal)

   ```bash
   npm start
   ```

   The React app runs on http://localhost:3000.

## API Endpoints

### Auth

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Log in a user       |

### Hotels

| Method | Endpoint                              | Description                        |
|--------|---------------------------------------|------------------------------------|
| POST   | `/api/hotels`                         | Create a hotel                     |
| PUT    | `/api/hotels/:id`                     | Update a hotel                     |
| DELETE | `/api/hotels/:id`                     | Delete a hotel                     |
| GET    | `/api/hotels/:id`                     | Get a hotel by ID                  |
| GET    | `/api/hotels`                         | Get all hotels                     |
| GET    | `/api/hotels/countByCity?cities=a,b`  | Count hotels by city               |
| GET    | `/api/hotels/countByType`             | Count hotels by property type      |
| GET    | `/api/hotels/room/:id`                | Get rooms for a hotel              |

### Rooms

| Method | Endpoint                      | Description                    |
|--------|-------------------------------|--------------------------------|
| POST   | `/api/room/:hotelid`          | Create a room for a hotel      |
| PUT    | `/api/room/:id`               | Update a room                  |
| PUT    | `/api/room/availability/:id`  | Update room availability dates |
| DELETE | `/api/room/:id/:hotelid`      | Delete a room                  |
| GET    | `/api/room`                   | Get all rooms                  |

### Users

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| PUT    | `/api/user/:id`  | Update a user    |
| DELETE | `/api/user/:id`  | Delete a user    |
| GET    | `/api/user/:id`  | Get a user by ID |
| GET    | `/api/user`      | Get all users    |

### Reservations

| Method | Endpoint                        | Description                     |
|--------|---------------------------------|---------------------------------|
| POST   | `/api/reservation/:userId`      | Create a reservation            |
| PUT    | `/api/reservation/:id`          | Update a reservation            |
| DELETE | `/api/reservation/:id/:userId`  | Delete a reservation            |
| GET    | `/api/reservation/:id`          | Get a reservation by ID         |
| GET    | `/api/reservation`              | Get all reservations            |
| GET    | `/api/reservation/find/:userId` | Get reservations for a user     |

### Reviews

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| POST   | `/api/review`            | Create a review              |
| GET    | `/api/review/:id`        | Get a review by ID           |
| GET    | `/api/review/hotel/:id`  | Get reviews for a hotel      |
| GET    | `/api/review`            | Get all reviews              |

## Data Models

### User

| Field        | Type     | Description                          |
|--------------|----------|--------------------------------------|
| username     | String   | Unique username                      |
| email        | String   | Unique email address                 |
| password     | String   | Hashed password                      |
| isAdmin      | Boolean  | Admin flag (default: false)          |
| reservations | [String] | Array of reservation IDs             |
| timestamps   |          | createdAt and updatedAt (automatic)  |

> **Note:** The User schema uses `require: true` instead of `required: true` for username, email, and password. Since `require` is not a recognized Mongoose validator, these fields are not actually enforced as required at the database level.

### Hotel

| Field         | Type     | Description                                |
|---------------|----------|--------------------------------------------|
| name          | String   | Hotel name (required)                      |
| type          | String   | Property type (hotel, apartment, resort, villa, cabin) |
| city          | String   | City where the hotel is located (required) |
| address       | String   | Street address (required)                  |
| distance      | String   | Distance from city center (required)       |
| photos        | [String] | Array of photo URLs                        |
| title         | String   | Display title (required)                   |
| desc          | String   | Description (required)                     |
| rating        | Number   | Rating from 0 to 10                        |
| subDesc       | String   | Secondary description (required)           |
| rooms         | [String] | Array of room IDs                          |
| cheapestPrice | Number   | Lowest room price (required)               |
| featured      | Boolean  | Featured flag (default: false)             |
| subSearch     | String   | Search subtitle (required)                 |

> **Note:** Unlike the other models, the Hotel schema does not enable Mongoose timestamps (`createdAt`/`updatedAt`).

### Room

| Field        | Type     | Description                                      |
|--------------|----------|--------------------------------------------------|
| title        | String   | Room title (required)                            |
| price        | Number   | Price per night (required)                       |
| maxPeople    | Number   | Maximum occupancy (required)                     |
| desc         | String   | Room description (required)                      |
| roomNumbers  | [Object] | Array of `{ number: Number, unavailableDates: [Date] }` |
| timestamps   |          | createdAt and updatedAt (automatic)              |

### Reservation

| Field      | Type    | Description                              |
|------------|---------|------------------------------------------|
| user       | String  | User ID (required)                       |
| dates      | [Date]  | Array of reserved dates (required)       |
| hotel      | String  | Hotel ID (required)                      |
| room       | String  | Room ID (required)                       |
| hotelName  | String  | Hotel name                               |
| roomNumber | Number  | Room number                              |
| hotelPhoto | String  | Hotel photo URL                          |
| total      | Number  | Total cost                               |
| timestamps |         | createdAt and updatedAt (automatic)      |

### Review

| Field    | Type   | Description                    |
|----------|--------|--------------------------------|
| userid   | String | User ID (required)             |
| rate     | Number | Rating from 0 to 10            |
| comment  | String | Review text                    |
| hotelid  | String | Hotel ID (required)            |
| username | String | Reviewer's username (required) |
| timestamps |      | createdAt and updatedAt (automatic) |

## Features

- User registration and login with JWT cookie-based authentication
- City exploration pages with photos and local food recommendations for 9 cities: Hanoi, Dongha, Tucson, Budapest, New York, LA, Seattle, Berlin, and London
- Hotel search by city with price filters
- Hotel detail view with photo gallery slider (Swiper)
- Room reservation with date-based availability checking
- Reservation management: view current and past reservations, cancel current ones
- Hotel review and rating system
- Responsive UI with Swiper carousels and React Bootstrap components

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description                          | Required |
|----------|--------------------------------------|----------|
| `MONGO`  | MongoDB connection string            | Yes      |
| `JWT`    | Secret key for signing JWT tokens    | Yes      |
| `PORT`   | Server port (defaults to 5050)       | No       |

### Frontend (`.env.production`)

| Variable                        | Description              | Required |
|---------------------------------|--------------------------|----------|
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel Web Analytics ID  | No       |

## Available Scripts

### Frontend (root directory)

| Command           | Description                                    |
|-------------------|------------------------------------------------|
| `npm start`       | Start the development server on port 3000      |
| `npm run build`   | Build for production                           |
| `npm test`        | Run tests with Jest and React Testing Library  |
| `npm run eject`   | Eject from Create React App                    |

### Backend (`booking-api/`)

| Command     | Description                                  |
|-------------|----------------------------------------------|
| `npm start` | Start the server with nodemon (auto-reload). Requires nodemon to be installed globally. |

## Deployment

The frontend includes Vercel Web Analytics integration via `web-vitals` and the `.env.production` configuration file. The `REACT_APP_VERCEL_ANALYTICS_ID` environment variable is set through Vercel's environment settings during deployment.

## License

ISC

## Disclaimer

All hotel information on this site (names, addresses, descriptions) is fictional and created for demonstration purposes. City information and food recommendations are based on research but may not be fully accurate.
