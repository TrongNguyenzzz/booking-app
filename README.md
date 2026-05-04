# Hotel Management & Booking App

A full-stack hotel management and booking application built with React and Express.js. Users can browse hotels across multiple cities, search by destination and dates, view property details and reviews, create accounts, make reservations, and manage their bookings.

## Demo

**Video Walkthrough:** [Watch on YouTube](https://youtu.be/HBzZPsiOX20)

## Screenshots

### Home Page
Browse featured cities, property types, and top-rated hotels.

![Home Page](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Search Results
Search for hotels by city, check-in/check-out dates, and number of guests. Filter results by price range.

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Details & Reviews
View hotel information including name, address, description, pricing, and guest reviews.

![Hotel Details](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservations
View past and current reservations. Cancel upcoming bookings directly from the reservations page.

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

## Features

- **User Authentication** - Register and log in with secure password hashing (bcrypt) and JWT-based sessions
- **Hotel Search** - Search hotels by city, check-in/check-out dates, and guest count with price range filters
- **City Guides** - Dedicated pages for 9 cities (Berlin, Budapest, Dong Ha, Hanoi, LA, London, New York, Seattle, Tucson) with local attractions and food recommendations
- **Property Browsing** - Browse properties by type (Hotels, Apartments, Resorts, Villas) with image sliders
- **Hotel Details** - View hotel information, photos, descriptions, and pricing
- **Room Reservation** - Select available rooms, choose dates, and complete bookings
- **Reservation Management** - View all past and current reservations; cancel upcoming ones
- **Reviews** - Read and submit hotel reviews with ratings (0-10 scale)
- **Featured Properties** - Highlighted top-rated properties on the home page
- **Responsive Design** - Built with Bootstrap and React-Bootstrap for responsive layouts

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI framework |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [Bootstrap 5](https://getbootstrap.com/) / [React-Bootstrap](https://react-bootstrap.github.io/) | UI components and styling |
| [react-date-range](https://github.com/hypeserver/react-date-range) | Date picker for check-in/check-out |
| [date-fns](https://date-fns.org/) | Date utility library |
| [Swiper](https://swiperjs.com/) | Image/property sliders |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| [Express.js](https://expressjs.com/) | Web server framework |
| [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/) | Database and ODM |
| [JSON Web Tokens](https://jwt.io/) | Authentication tokens |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | Cookie handling for auth tokens |
| [cors](https://github.com/expressjs/cors) | Cross-origin resource sharing |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

## Project Structure

```
booking-app/
├── public/                     # Static assets
├── src/                        # React frontend source
│   ├── assets/                 # Images (city photos, logos, food images)
│   ├── components/
│   │   ├── featured/           # Featured cities section
│   │   ├── footer/             # Footer component
│   │   ├── guestLove/          # Guest favorites section
│   │   ├── header/             # Header with search bar
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listings with sliders
│   │   │   └── slider/         # Apartment, Hotel, Resort, Villa sliders
│   │   ├── reserve/            # Room reservation modal
│   │   ├── review/             # Review display and submission
│   │   └── searchItem/         # Search result item card
│   ├── context/
│   │   ├── AuthContext.jsx      # Authentication state management
│   │   └── SearchContext.jsx    # Search parameters state management
│   ├── hooks/
│   │   └── useFetch.js          # Custom hook for API data fetching
│   ├── pages/
│   │   ├── city/                # City guide pages (9 cities)
│   │   ├── home/                # Home page
│   │   ├── hotel/               # Hotel detail page
│   │   ├── list/                # Search results page
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   └── reservation/         # User reservations page
│   ├── App.js                   # Route definitions
│   └── index.js                 # App entry point
├── booking-api/                 # Express.js backend
│   ├── api/
│   │   ├── controllers/         # Route handler logic
│   │   │   ├── auth.js          # Register & login
│   │   │   ├── hotel.js         # Hotel CRUD & queries
│   │   │   ├── reservation.js   # Reservation CRUD
│   │   │   ├── review.js        # Review CRUD
│   │   │   ├── room.js          # Room CRUD & availability
│   │   │   └── user.js          # User CRUD
│   │   ├── models/              # Mongoose schemas
│   │   │   ├── hotel.js         # Hotel model
│   │   │   ├── reservation.js   # Reservation model
│   │   │   ├── review.js        # Review model
│   │   │   ├── room.js          # Room model
│   │   │   └── user.js          # User model
│   │   ├── routes/              # Express route definitions
│   │   │   ├── auth.js          # /api/auth routes
│   │   │   ├── hotel.js         # /api/hotels routes
│   │   │   ├── reservation.js   # /api/reservation routes
│   │   │   ├── review.js        # /api/review routes
│   │   │   ├── room.js          # /api/room routes
│   │   │   └── user.js          # /api/user routes
│   │   └── utils/
│   │       ├── error.js         # Custom error creator
│   │       └── verifyToken.js   # JWT verification middleware
│   ├── index.js                 # Server entry point
│   └── package.json
├── package.json                 # Frontend dependencies
└── .env.production              # Production environment variables
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** - A running MongoDB instance (local or cloud-hosted, e.g., [MongoDB Atlas](https://www.mongodb.com/atlas))

## Installation & Setup

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

Create a `.env` file in the `booking-api/` directory with the following variables:

```env
MONGO=your_mongodb_connection_string
JWT=your_jwt_secret_key
PORT=5050
```

- `MONGO` - Your MongoDB connection URI (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/booking`)
- `JWT` - A secret string used for signing JSON Web Tokens
- `PORT` - The port the API server will run on (defaults to `5050` if not set)

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
npm start
```

The frontend will be running at `http://localhost:3000`.

## API Endpoints

All API routes are prefixed with `/api`.

### Authentication (`/api/auth`)

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in an existing user |

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
| `GET` | `/api/hotels` | Get all hotels (supports query params: `city`, `min`, `max`) |
| `GET` | `/api/hotels/:id` | Get a hotel by ID |
| `POST` | `/api/hotels` | Create a new hotel |
| `PUT` | `/api/hotels/:id` | Update a hotel |
| `DELETE` | `/api/hotels/:id` | Delete a hotel |
| `GET` | `/api/hotels/countByCity` | Get hotel counts grouped by city |
| `GET` | `/api/hotels/countByType` | Get hotel counts grouped by property type |
| `GET` | `/api/hotels/room/:id` | Get all rooms for a hotel |

### Rooms (`/api/room`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/room` | Get all rooms |
| `POST` | `/api/room/:hotelid` | Create a room for a hotel |
| `PUT` | `/api/room/:id` | Update a room |
| `PUT` | `/api/room/availability/:id` | Update room availability (dates) |
| `DELETE` | `/api/room/:id/:hotelid` | Delete a room from a hotel |

### Reservations (`/api/reservation`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/reservation` | Get all reservations |
| `GET` | `/api/reservation/:id` | Get a reservation by ID |
| `GET` | `/api/reservation/find/:userId` | Get all reservations for a user |
| `POST` | `/api/reservation/:userId` | Create a reservation for a user |
| `PUT` | `/api/reservation/:id` | Update a reservation |
| `DELETE` | `/api/reservation/:id/:userId` | Delete a reservation |

### Reviews (`/api/review`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/review` | Get all reviews |
| `GET` | `/api/review/:id` | Get a review by ID |
| `GET` | `/api/review/hotel/:id` | Get all reviews for a hotel |
| `POST` | `/api/review` | Create a new review |

## Data Models

### User
| Field | Type | Description |
|---|---|---|
| `username` | String | Unique username (required) |
| `email` | String | Unique email address (required) |
| `password` | String | Hashed password (required) |
| `isAdmin` | Boolean | Admin flag (default: `false`) |
| `reservations` | [String] | Array of reservation IDs |

### Hotel
| Field | Type | Description |
|---|---|---|
| `name` | String | Hotel name (required) |
| `type` | String | Property type - hotel, apartment, resort, villa (required) |
| `city` | String | City location (required) |
| `address` | String | Full address (required) |
| `distance` | String | Distance from city center (required) |
| `photos` | [String] | Array of photo URLs |
| `title` | String | Display title (required) |
| `desc` | String | Full description (required) |
| `subDesc` | String | Short description (required) |
| `subSearch` | String | Search subtitle (required) |
| `rating` | Number | Rating from 0 to 10 |
| `rooms` | [String] | Array of room IDs |
| `cheapestPrice` | Number | Starting price (required) |
| `featured` | Boolean | Featured on home page (default: `false`) |

### Room
| Field | Type | Description |
|---|---|---|
| `title` | String | Room name (required) |
| `price` | Number | Price per night (required) |
| `maxPeople` | Number | Maximum occupancy (required) |
| `desc` | String | Room description (required) |
| `roomNumbers` | Array | Room numbers with unavailable dates |

### Reservation
| Field | Type | Description |
|---|---|---|
| `user` | String | User ID (required) |
| `hotel` | String | Hotel ID (required) |
| `room` | String | Room ID (required) |
| `roomNumber` | Number | Room number (required) |
| `hotelName` | String | Hotel name (required) |
| `hotelPhoto` | String | Hotel photo URL (required) |
| `dates` | [Date] | Reserved dates (required) |
| `total` | Number | Total cost (required) |

### Review
| Field | Type | Description |
|---|---|---|
| `userid` | String | Reviewer's user ID (required) |
| `username` | String | Reviewer's username (required) |
| `hotelid` | String | Hotel ID being reviewed (required) |
| `rate` | Number | Rating from 0 to 10 |
| `comment` | String | Review text |

## Environment Variables

### Backend (`booking-api/.env`)

| Variable | Description | Required |
|---|---|---|
| `MONGO` | MongoDB connection URI | Yes |
| `JWT` | Secret key for JWT signing | Yes |
| `PORT` | Server port (default: `5050`) | No |

### Frontend (`.env.production`)

| Variable | Description | Required |
|---|---|---|
| `REACT_APP_VERCEL_ANALYTICS_ID` | Vercel Analytics ID (for production deployment) | No |

## Available Scripts

### Frontend (project root)

| Command | Description |
|---|---|
| `npm start` | Start the development server on `http://localhost:3000` |
| `npm run build` | Create a production build in the `build/` directory |
| `npm test` | Run tests in interactive watch mode |
| `npm run eject` | Eject from Create React App (one-way operation) |

### Backend (`booking-api/`)

| Command | Description |
|---|---|
| `npm start` | Start the API server with nodemon (auto-restarts on changes) |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add your feature'`)
5. Push to your branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

Please make sure your code follows the existing project conventions and test your changes before submitting.

## License

This project is licensed under the ISC License.

## Disclaimer

All the information on the page such as hotel names and addresses are fictional and not real. However, the information about each city (attractions, food recommendations, etc.) is based on research and is reasonably accurate. This project is intended for educational and demonstration purposes only.
