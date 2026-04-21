# Hotel Management System

A full-stack hotel booking and management application that allows users to search for hotels, make reservations, view city guides, and manage their bookings. Built with React on the frontend and Express/Node.js with MongoDB on the backend.

## Demo

[Watch the demo video on YouTube](https://youtu.be/HBzZPsiOX20)

## Screenshots

### Home Page

![Home Page](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Search Results

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Detail

![Hotel Detail](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservations

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Features

- User registration and login with JWT-based authentication
- Hotel search by city, dates, and number of guests
- Hotel detail pages with photo galleries, descriptions, and pricing
- Room reservation system with date-based availability checking
- View current and past reservations
- Cancel current reservations
- Hotel reviews and ratings (0-10 scale)
- City introduction pages with photos and local food recommendations
- Browse properties by type (hotels, apartments, resorts, villas, cabins)
- Featured and best-rated properties section on the home page

## Tech Stack

### Frontend

- **React 18** - UI framework
- **React Router DOM 6** - Client-side routing
- **Bootstrap 5 / React Bootstrap** - UI component library
- **Axios** - HTTP client for API requests
- **react-date-range** - Date picker for booking dates
- **react-toastify** - Toast notifications
- **Swiper** - Image carousels and sliders
- **Font Awesome / react-icons** - Icon libraries
- **Context API** - State management (AuthContext, SearchContext)

### Backend

- **Express 4.18** - Web framework (ES Modules)
- **Mongoose 7.4** - MongoDB ODM
- **MongoDB** - Database
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **nodemon** - Development auto-restart

## Project Structure

```
booking-app/
├── public/                  # Static assets
├── src/                     # React frontend source
│   ├── components/          # Reusable UI components
│   ├── context/             # React Context providers (Auth, Search)
│   ├── hooks/               # Custom hooks (useFetch)
│   ├── pages/               # Page components
│   │   ├── city/            # City introduction pages
│   │   ├── home/            # Home page
│   │   ├── hotel/           # Hotel detail page
│   │   ├── list/            # Search results page
│   │   ├── login/           # Login page
│   │   ├── register/        # Registration page
│   │   └── reservation/     # User reservations page
│   ├── App.js               # Root component with routes
│   └── index.js             # Entry point
├── booking-api/             # Express backend
│   ├── api/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # Express route definitions
│   │   └── utils/           # Utility functions (auth verification)
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
├── package.json             # Frontend dependencies
└── README.md
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas)

## Installation and Setup

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

Create a `.env` file in the `booking-api` directory with the following variables:

```env
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret_key
PORT=5050
```

Start the backend server:

```bash
npm start
```

The API will be running at `http://localhost:5050`.

### 3. Set Up the Frontend

Open a new terminal and navigate to the project root:

```bash
cd booking-app
npm install
```

Start the frontend development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description |
|----------|-------------|
| `MONGO` | MongoDB connection string (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/dbname`) |
| `JWT` | Secret key used for signing JSON Web Tokens |
| `PORT` | Server port (defaults to 5050 if not set) |

### Frontend (`.env.production`)

| Variable | Description |
|----------|-------------|
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel analytics ID (for production deployment) |

## API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Users (`/api/user`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/:id` | Get user by ID |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

### Hotels (`/api/hotels`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels (with query filters) |
| GET | `/api/hotels/find/:id` | Get hotel by ID |
| GET | `/api/hotels/countByCity` | Count hotels by city |
| GET | `/api/hotels/countByType` | Count hotels by property type |
| GET | `/api/hotels/room/:id` | Get rooms for a hotel |
| POST | `/api/hotels` | Create a new hotel |
| PUT | `/api/hotels/:id` | Update a hotel |
| DELETE | `/api/hotels/:id` | Delete a hotel |

### Rooms (`/api/room`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room/:id` | Get room by ID |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update a room |
| PUT | `/api/room/availability/:id` | Update room availability dates |
| DELETE | `/api/room/:id/:hotelid` | Delete a room |

### Reservations (`/api/reservation`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation/:id` | Get reservation by ID |
| GET | `/api/reservation/user/:userid` | Get all reservations for a user |
| POST | `/api/reservation` | Create a reservation |
| DELETE | `/api/reservation/:id` | Cancel a reservation |

### Reviews (`/api/review`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review/:hotelid` | Get all reviews for a hotel |
| POST | `/api/review` | Create a review |

## Database Models

### User

| Field | Type | Description |
|-------|------|-------------|
| username | String | Unique username |
| email | String | Unique email address |
| password | String | Hashed password |
| isAdmin | Boolean | Admin flag (default: false) |
| reservations | Array | List of reservation IDs |

### Hotel

| Field | Type | Description |
|-------|------|-------------|
| name | String | Hotel name |
| type | String | Property type (hotel, apartment, resort, villa, cabin) |
| city | String | City location |
| address | String | Full address |
| distance | String | Distance from city center |
| photos | Array | Photo URLs |
| title | String | Display title |
| desc | String | Description |
| rating | Number | Rating (0-10) |
| rooms | Array | Room IDs |
| cheapestPrice | Number | Starting price |
| featured | Boolean | Featured flag |

### Room

| Field | Type | Description |
|-------|------|-------------|
| title | String | Room title |
| price | Number | Price per night |
| maxPeople | Number | Maximum occupancy |
| desc | String | Room description |
| roomNumbers | Array | Objects with `number` and `unavailableDates` |

### Reservation

| Field | Type | Description |
|-------|------|-------------|
| user | String | User ID |
| dates | Array | Reserved dates |
| hotel | String | Hotel ID |
| room | String | Room ID |
| hotelName | String | Hotel name (denormalized) |
| roomNumber | Number | Room number |
| hotelPhoto | String | Hotel photo URL |
| total | Number | Total cost |

### Review

| Field | Type | Description |
|-------|------|-------------|
| userid | String | Reviewer's user ID |
| username | String | Reviewer's username |
| rate | Number | Rating (0-10) |
| comment | String | Review text |
| hotelid | String | Hotel being reviewed |

## Available Scripts

### Frontend (project root)

| Command | Description |
|---------|-------------|
| `npm start` | Runs the React app in development mode on port 3000 |
| `npm run build` | Builds the app for production |
| `npm test` | Runs the test suite |
| `npm run eject` | Ejects from Create React App (irreversible) |

### Backend (`booking-api/`)

| Command | Description |
|---------|-------------|
| `npm start` | Runs the Express server with nodemon on port 5050 |

## Frontend Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with city highlights, property types, and featured hotels |
| `/hotels` | List | Search results with filters |
| `/hotels/:id` | Hotel | Hotel detail with photos, info, reviews, and reservation |
| `/login` | Login | User login form |
| `/register` | Register | User registration form |
| `/reservation` | Reservation | View and manage user reservations |
| `/hanoi` | Hanoi | City guide for Hanoi |
| `/dongha` | Dong Ha | City guide for Dong Ha |
| `/tucson` | Tucson | City guide for Tucson |
| `/budapest` | Budapest | City guide for Budapest |
| `/newyork` | New York | City guide for New York |
| `/la` | Los Angeles | City guide for Los Angeles |
| `/seattle` | Seattle | City guide for Seattle |
| `/berlin` | Berlin | City guide for Berlin |
| `/london` | London | City guide for London |

## Author

**trongngn_5**

## Disclaimer

All the information on the page such as hotel names and addresses are fictional and not real. However, the information about each city is based on research and is reasonably accurate.

## License

ISC
