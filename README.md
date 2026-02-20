# Hotel Booking Application

A full-stack hotel booking application that enables users to search for hotels, make reservations, manage bookings, and read/write reviews. The application features city guides with recommendations for famous places and local cuisine across multiple destinations worldwide.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

### Search Functionality
- Search hotels by city, check-in/check-out dates, and number of guests
- Filter results by property type (hotels, apartments, resorts, villas)
- View hotel counts by city and property type
- Browse featured destinations with city guides

### User Authentication
- User registration with secure password hashing
- JWT-based authentication system
- Persistent login sessions using local storage
- Protected routes for authenticated users

### Reservation System
- Browse available rooms for selected dates
- Make reservations with date range selection
- View all past and current reservations
- Cancel active reservations
- Room availability management

### Reviews
- Read reviews from other guests
- Submit reviews for hotels
- View hotel-specific review ratings

### City Guides
- Explore 9 featured destinations: Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, and London
- View city-specific information and recommendations
- Browse famous places and local cuisine suggestions

## Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library with hooks and functional components
- **React Router DOM 6.14.2** - Client-side routing
- **Bootstrap 5.3.1** - CSS framework for responsive design
- **React Bootstrap 2.8.0** - Bootstrap components for React
- **Axios 1.4.0** - HTTP client for API requests
- **React Date Range 1.4.0** - Date picker component
- **React Toastify 9.1.3** - Toast notifications
- **Swiper 10.2.0** - Touch slider component
- **React Icons 4.10.1** - Icon library

### Backend
- **Express.js 4.18.2** - Node.js web framework
- **MongoDB** - NoSQL database
- **Mongoose 7.4.1** - MongoDB object modeling
- **JSON Web Token (JWT) 9.0.1** - Authentication tokens
- **bcryptjs 2.4.3** - Password hashing
- **cookie-parser 1.4.6** - Cookie parsing middleware
- **cors 2.8.5** - Cross-origin resource sharing
- **dotenv 16.3.1** - Environment variable management

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14.x or higher recommended)
- **npm** or **pnpm** package manager
- **MongoDB** (local installation or MongoDB Atlas cloud instance)

## Installation

### Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### Backend Setup

1. Navigate to the API directory:
   ```bash
   cd booking-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `booking-api` directory with the required environment variables (see [Environment Variables](#environment-variables) section).

### Frontend Setup

1. Navigate to the root project directory:
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   Or if using pnpm:
   ```bash
   pnpm install
   ```

## Usage

### Running the Development Servers

#### Start the Backend Server

1. Navigate to the API directory:
   ```bash
   cd booking-api
   ```

2. Start the server:
   ```bash
   npm start
   ```

   The API server will run on `http://localhost:5050`

#### Start the Frontend Development Server

1. From the root project directory:
   ```bash
   npm start
   ```

   The React application will run on `http://localhost:3000`

### Testing the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Register a new account or log in with existing credentials
3. Search for hotels by selecting a city, dates, and number of guests
4. Browse hotels and make reservations
5. View and manage your reservations from the Reservation page

## Project Structure

```
booking-app/
├── public/                     # Static public assets
│   ├── index.html              # HTML template
│   ├── favicon.ico             # App favicon
│   └── manifest.json           # PWA manifest
│
├── src/                        # Frontend source code
│   ├── assets/                 # Static assets (images)
│   │   ├── cityImg/            # City images for homepage
│   │   ├── pageCity/           # City guide page images
│   │   ├── propertyImg/        # Property type images
│   │   └── reviewImg/          # Review section images
│   │
│   ├── components/             # Reusable React components
│   │   ├── featured/           # Featured cities component
│   │   ├── footer/             # Footer component
│   │   ├── guestLove/          # Guest favorites section
│   │   ├── header/             # Header with search
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property types carousel
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Reviews display
│   │   └── searchItem/         # Hotel search result item
│   │
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state
│   │   └── SearchContext.jsx   # Search parameters state
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Data fetching hook
│   │
│   ├── pages/                  # Page components
│   │   ├── city/               # City guide pages
│   │   ├── home/               # Homepage
│   │   ├── hotel/              # Hotel details page
│   │   ├── list/               # Search results page
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations page
│   │
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   ├── index.js                # Application entry point
│   └── index.css               # Base styles
│
├── booking-api/                # Backend API
│   ├── api/
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.js         # Authentication logic
│   │   │   ├── hotel.js        # Hotel CRUD operations
│   │   │   ├── reservation.js  # Reservation management
│   │   │   ├── review.js       # Review operations
│   │   │   ├── room.js         # Room management
│   │   │   └── user.js         # User management
│   │   │
│   │   ├── models/             # Mongoose schemas
│   │   │   ├── hotel.js        # Hotel model
│   │   │   ├── reservation.js  # Reservation model
│   │   │   ├── review.js       # Review model
│   │   │   ├── room.js         # Room model
│   │   │   └── user.js         # User model
│   │   │
│   │   ├── routes/             # API route definitions
│   │   │   ├── auth.js         # Auth routes
│   │   │   ├── hotel.js        # Hotel routes
│   │   │   ├── reservation.js  # Reservation routes
│   │   │   ├── review.js       # Review routes
│   │   │   ├── room.js         # Room routes
│   │   │   └── user.js         # User routes
│   │   │
│   │   └── utils/              # Utility functions
│   │       ├── error.js        # Error handling
│   │       └── verifyToken.js  # JWT verification
│   │
│   ├── index.js                # Server entry point
│   └── package.json            # Backend dependencies
│
├── package.json                # Frontend dependencies
└── README.md                   # Project documentation
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Hotels

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels (with query filters) |
| GET | `/api/hotels/:id` | Get a specific hotel |
| POST | `/api/hotels` | Create a new hotel |
| PUT | `/api/hotels/:id` | Update a hotel |
| DELETE | `/api/hotels/:id` | Delete a hotel |
| GET | `/api/hotels/countByCity` | Get hotel count by city |
| GET | `/api/hotels/countByType` | Get hotel count by type |
| GET | `/api/hotels/room/:id` | Get rooms for a hotel |

### Rooms

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room` | Get all rooms |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update a room |
| PUT | `/api/room/availability/:id` | Update room availability |
| DELETE | `/api/room/:id/:hotelid` | Delete a room |

### Reservations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation` | Get all reservations |
| GET | `/api/reservation/:id` | Get a specific reservation |
| GET | `/api/reservation/find/:userId` | Get user's reservations |
| POST | `/api/reservation/:userId` | Create a reservation |
| PUT | `/api/reservation/:id` | Update a reservation |
| DELETE | `/api/reservation/:id/:userId` | Cancel a reservation |

### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review` | Get all reviews |
| GET | `/api/review/:id` | Get a specific review |
| GET | `/api/review/hotel/:id` | Get reviews for a hotel |
| POST | `/api/review` | Create a new review |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get a specific user |
| PUT | `/api/user/:id` | Update a user |
| DELETE | `/api/user/:id` | Delete a user |

## Environment Variables

Create a `.env` file in the `booking-api` directory with the following variables:

```env
# MongoDB Connection String
MONGO=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# Server Port (optional, defaults to 5050)
PORT=5050
```

### Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO` | MongoDB connection string (local or Atlas) | Yes |
| `JWT_SECRET` | Secret key for JWT token signing | Yes |
| `PORT` | Port number for the API server | No (default: 5050) |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

### Code Style Guidelines

- Follow existing code conventions and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all tests pass before submitting

## License

This project is licensed under the ISC License.

---

## Demo

📺 **Video Demo**: [https://youtu.be/HBzZPsiOX20](https://youtu.be/HBzZPsiOX20)

### Screenshots

**Homepage with City Guides**
![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

**Hotel Search Results**
![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

**Hotel Details with Reviews**
![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

**Reservations Management**
![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

---

> **Disclaimer**: All hotel names and addresses displayed in the application are fictional. City information and recommendations are based on research and may not reflect current conditions.
