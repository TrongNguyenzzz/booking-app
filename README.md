# Hotel Management Booking App

A full-stack hotel management and booking web application that allows users to search for hotels across multiple cities, make reservations, leave reviews, and explore city guides with local recommendations.

## Author

- [trongngn_5](https://github.com/TrongNguyenzzz)

## Demo

[Watch the demo video on YouTube](https://youtu.be/HBzZPsiOX20)

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

- User registration and login with JWT authentication
- Search hotels by city, date range, and number of guests
- View hotel details including address, description, pricing, and photos
- Read and submit hotel reviews
- Reserve rooms with date selection
- View past and current reservations
- Cancel current reservations
- City introduction pages with sightseeing highlights and local food recommendations
- Explore cities: Hanoi, Dong Ha, Tucson, Budapest, New York, Los Angeles, Seattle, Berlin, and London

## Tech Stack

### Frontend
- React 18
- React Router v6
- React Bootstrap 5
- Axios (HTTP client)
- react-date-range (date picker)
- react-toastify (notifications)
- Swiper (image carousels)

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing
- cookie-parser and CORS middleware

## Project Structure

```
booking-app/
├── public/                     # Static assets
├── src/                        # React frontend source
│   ├── assets/                 # Images (city photos, logos)
│   ├── components/             # Reusable UI components
│   │   ├── featured/           # Featured cities section
│   │   ├── footer/             # Site footer
│   │   ├── guestLove/          # Guest favorites section
│   │   ├── header/             # Search header
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listings
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Hotel reviews
│   │   └── searchItem/         # Search result card
│   ├── context/                # React context (auth state)
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   │   ├── city/               # City introduction pages
│   │   ├── home/               # Home page
│   │   ├── hotel/              # Hotel detail page
│   │   ├── list/               # Search results page
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations page
│   ├── App.js                  # Root component with routes
│   └── App.css                 # Global styles
├── booking-api/                # Express backend
│   ├── api/
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.js         # Register and login logic
│   │   │   ├── hotel.js        # Hotel CRUD operations
│   │   │   ├── reservation.js  # Reservation management
│   │   │   ├── review.js       # Review operations
│   │   │   ├── room.js         # Room management
│   │   │   └── user.js         # User management
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # Express route definitions
│   │   └── utils/              # Helpers (error handling, JWT verification)
│   ├── index.js                # Server entry point
│   └── package.json
├── package.json                # Frontend dependencies
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
- npm or yarn

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

Create a `.env` file inside `booking-api/` with the following variables:

```env
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5050
```

Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/booking`) and `your_jwt_secret_key` with a secure random string.

Start the backend server:

```bash
npm start
```

The API will run at `http://localhost:5050`.

### 3. Set up the frontend

Open a new terminal, then from the project root:

```bash
npm install
npm start
```

The frontend will run at `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000` in your browser.
2. Register a new account or log in with existing credentials.
3. Browse city pages by clicking on city images on the home page.
4. Use the search bar to find hotels by city, dates, and guest count.
5. Click on a hotel to view details, photos, and reviews.
6. Click "Reserve" to book a room for your selected dates.
7. Visit the "Reservation" page to view or cancel your bookings.

## API Overview

The backend runs on Express and exposes the following route groups:

### Authentication (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |

### Users (`/api/user`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get a user by ID |
| PUT | `/api/user/:id` | Update a user |
| DELETE | `/api/user/:id` | Delete a user |

### Hotels (`/api/hotels`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hotels` | Get all hotels (supports query filters) |
| GET | `/api/hotels/:id` | Get a hotel by ID |
| GET | `/api/hotels/countByCity` | Get hotel counts by city |
| GET | `/api/hotels/countByType` | Get hotel counts by property type |
| GET | `/api/hotels/room/:id` | Get rooms for a hotel |
| POST | `/api/hotels` | Create a hotel |
| PUT | `/api/hotels/:id` | Update a hotel |
| DELETE | `/api/hotels/:id` | Delete a hotel |

### Rooms (`/api/room`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/room` | Get all rooms |
| POST | `/api/room/:hotelid` | Create a room for a hotel |
| PUT | `/api/room/:id` | Update a room |
| PUT | `/api/room/availability/:id` | Update room availability |
| DELETE | `/api/room/:id/:hotelid` | Delete a room |

### Reservations (`/api/reservation`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reservation` | Get all reservations |
| GET | `/api/reservation/:id` | Get a reservation by ID |
| GET | `/api/reservation/find/:userId` | Get reservations for a user |
| POST | `/api/reservation/:userId` | Create a reservation |
| PUT | `/api/reservation/:id` | Update a reservation |
| DELETE | `/api/reservation/:id/:userId` | Delete a reservation |

### Reviews (`/api/review`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/review` | Get all reviews |
| GET | `/api/review/:id` | Get a review by ID |
| GET | `/api/review/hotel/:id` | Get reviews for a hotel |
| POST | `/api/review` | Create a review |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please make sure your code follows the existing project style and that the application runs without errors before submitting.

## License

This project is licensed under the ISC License.

## Disclaimer

All hotel names, addresses, and related details on this site are fictional. City information and recommendations are based on research but may not be fully accurate.
