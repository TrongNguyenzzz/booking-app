# Hotel Management Booking App

A full-stack hotel management and booking system built with React and Express.js. Users can browse city guides, search for hotels, make and manage reservations, and leave reviews. The application features user authentication, a rich city exploration experience with photos and food recommendations, and a complete reservation workflow.

## Demo

[Watch the demo on YouTube](https://youtu.be/HBzZPsiOX20?feature=shared)

## Screenshots

**Home Page**

![Home Page](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

**Search Results**

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

**Hotel Details and Reviews**

![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

**Reservations Management**

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Features

- **User Authentication** - Register and log in with secure password hashing (bcrypt) and JWT-based sessions
- **Hotel Search** - Search hotels by city, check-in/check-out dates, and guest count (adults, children, rooms)
- **Hotel Listings** - Browse hotels filtered by city with details including name, address, description, rating, and pricing
- **Room Reservation** - Select available rooms, view pricing, and complete bookings with date-based availability tracking
- **Reservation Management** - View all past and current reservations; cancel upcoming reservations
- **Hotel Reviews** - Read and submit reviews with ratings (0-10 scale) and comments for any hotel
- **City Guides** - Explore 9 featured cities (Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, London) with photo galleries and local food recommendations
- **Property Types** - Browse by property type (hotels, apartments, resorts, villas) with image sliders
- **Featured Properties** - Highlighted "guest love" properties on the home page
- **Responsive Navigation** - Persistent navbar with authentication-aware buttons (login/register or reservation access)

## Tech Stack

### Frontend

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **React Context API** - State management (AuthContext, SearchContext)
- **Axios** - HTTP client for API requests
- **Bootstrap 5 / React Bootstrap** - UI component framework
- **React Date Range** - Date picker for check-in/check-out selection
- **Swiper** - Image sliders for property listings
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **date-fns** - Date utility functions
- **CSS Modules** - Component-scoped styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB / Mongoose** - Database and ODM
- **JSON Web Tokens (JWT)** - Authentication tokens
- **bcrypt.js** - Password hashing
- **cookie-parser** - Cookie handling for auth tokens
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
booking-app/
├── public/                     # Static assets (favicon, index.html, manifest)
├── src/                        # Frontend source code
│   ├── assets/                 # Images and static media
│   │   ├── cityImg/            # City thumbnail images
│   │   └── pageCity/           # City page photos and food images
│   ├── components/             # Reusable UI components
│   │   ├── featured/           # Featured cities section
│   │   ├── footer/             # Footer component
│   │   ├── guestLove/          # Guest favorites section
│   │   ├── header/             # Search header with date picker
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listings with sliders
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Review display and submission
│   │   └── searchItem/         # Hotel search result card
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state management
│   │   └── SearchContext.jsx   # Search parameters state management
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Data fetching hook with loading/error states
│   ├── pages/                  # Page components
│   │   ├── city/               # Individual city guide pages (9 cities)
│   │   ├── home/               # Home page
│   │   ├── hotel/              # Hotel detail page
│   │   ├── list/               # Hotel search results page
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations page
│   ├── App.js                  # Root component with route definitions
│   └── index.js                # Application entry point
├── booking-api/                # Backend API
│   ├── api/
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.js         # Register and login logic
│   │   │   ├── hotel.js        # Hotel CRUD operations
│   │   │   ├── reservation.js  # Reservation CRUD operations
│   │   │   ├── review.js       # Review operations
│   │   │   ├── room.js         # Room management
│   │   │   └── user.js         # User management
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
│   │   └── utils/              # Utility functions
│   │       ├── error.js        # Custom error handler
│   │       └── verifyToken.js  # JWT verification middleware
│   ├── index.js                # Express server entry point
│   └── package.json            # Backend dependencies
├── package.json                # Frontend dependencies
└── .env.production             # Production environment config
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **pnpm**
- **MongoDB** instance (local or cloud-hosted, e.g., MongoDB Atlas)

## Installation and Setup

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

Create a `.env` file in the `booking-api/` directory with the following variables:

```env
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret_key
PORT=5050
```

Start the API server:

```bash
npm start
```

The backend will run at **http://localhost:5050**.

### 3. Set up the frontend

Open a new terminal and navigate to the project root:

```bash
cd booking-app
npm install
```

Start the development server:

```bash
npm start
```

The frontend will run at **http://localhost:3000**.

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description                          | Example                                         |
| -------- | ------------------------------------ | ------------------------------------------------ |
| `MONGO`  | MongoDB connection string            | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT`    | Secret key for signing JWT tokens    | `your_secret_key_here`                           |
| `PORT`   | Port for the Express server          | `5050`                                           |

### Frontend (`.env.production`)

| Variable                        | Description             |
| ------------------------------- | ----------------------- |
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel Analytics ID     |

## API Endpoints

All API routes are prefixed with the base URL (default: `http://localhost:5050`).

### Authentication (`/api/auth`)

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in an existing user  |

### Hotels (`/api/hotels`)

| Method | Endpoint                  | Description                          |
| ------ | ------------------------- | ------------------------------------ |
| POST   | `/api/hotels`             | Create a new hotel                   |
| PUT    | `/api/hotels/:id`         | Update a hotel                       |
| DELETE | `/api/hotels/:id`         | Delete a hotel                       |
| GET    | `/api/hotels/:id`         | Get a specific hotel                 |
| GET    | `/api/hotels`             | Get all hotels (supports query filters) |
| GET    | `/api/hotels/countByCity` | Get hotel count by city              |
| GET    | `/api/hotels/countByType` | Get hotel count by property type     |
| GET    | `/api/hotels/room/:id`    | Get all rooms for a hotel            |

### Rooms (`/api/room`)

| Method | Endpoint                        | Description                          |
| ------ | ------------------------------- | ------------------------------------ |
| POST   | `/api/room/:hotelid`            | Create a room for a hotel            |
| PUT    | `/api/room/availability/:id`    | Update room availability dates       |
| PUT    | `/api/room/:id`                 | Update a room                        |
| DELETE | `/api/room/:id/:hotelid`        | Delete a room from a hotel           |
| GET    | `/api/room`                     | Get all rooms                        |

### Reservations (`/api/reservation`)

| Method | Endpoint                          | Description                            |
| ------ | --------------------------------- | -------------------------------------- |
| POST   | `/api/reservation/:userId`        | Create a reservation for a user        |
| PUT    | `/api/reservation/:id`            | Update a reservation                   |
| DELETE | `/api/reservation/:id/:userId`    | Delete (cancel) a reservation          |
| GET    | `/api/reservation/:id`            | Get a specific reservation             |
| GET    | `/api/reservation`                | Get all reservations                   |
| GET    | `/api/reservation/find/:userId`   | Get all reservations for a user        |

### Reviews (`/api/review`)

| Method | Endpoint                  | Description                        |
| ------ | ------------------------- | ---------------------------------- |
| POST   | `/api/review`             | Create a review                    |
| GET    | `/api/review/:id`         | Get a specific review              |
| GET    | `/api/review/hotel/:id`   | Get all reviews for a hotel        |
| GET    | `/api/review`             | Get all reviews                    |

### Users (`/api/user`)

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| PUT    | `/api/user/:id`   | Update a user            |
| DELETE | `/api/user/:id`   | Delete a user            |
| GET    | `/api/user/:id`   | Get a specific user      |
| GET    | `/api/user`       | Get all users            |

## Usage

1. **Register** - Create a new account using the Register button in the navigation bar
2. **Log in** - Sign in with your credentials
3. **Explore cities** - Click on city images on the home page to view guides with photos and food recommendations
4. **Search hotels** - Use the search bar to select a city, dates, and guest count, then click Search
5. **View hotel details** - Click on any hotel from the search results to see full details, photos, and reviews
6. **Make a reservation** - On the hotel detail page, click Reserve to select an available room and confirm your booking
7. **Manage reservations** - Click Reservation in the navbar to view all your bookings and cancel upcoming ones
8. **Leave a review** - Submit a rating and comment on any hotel detail page

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please make sure your code follows the existing project conventions and includes appropriate testing.

## Disclaimer

All hotel names, addresses, and related business information on this site are fictional and created for demonstration purposes. City descriptions and cultural information are based on research but may not be fully accurate. This project is intended for educational use only.

## License

This project is licensed under the ISC License.
