# Hotel Booking App

A full-stack hotel management and booking system built with **React** (frontend) and **Express.js + MongoDB** (backend). Users can browse cities, search for hotels, make reservations, leave reviews, and manage their bookings.

## Demo

**Video Demo:** [https://youtu.be/HBzZPsiOX20](https://youtu.be/HBzZPsiOX20)

### Screenshots

| Home Page | Search Results |
|-----------|---------------|
| ![Home](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c) | ![Search](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc) |

| Hotel Details | Reservations |
|---------------|--------------|
| ![Hotel](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f) | ![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e) |

---

## Features

- **City Exploration** — Browse 9 featured cities (Hanoi, Dong Ha, Tucson, Budapest, New York, LA, Seattle, Berlin, London) with photos and local food recommendations
- **Hotel Search** — Search hotels by city, dates, and number of guests
- **User Authentication** — Register/login with JWT-based authentication
- **Reservations** — Book rooms, view current & past reservations, cancel upcoming bookings
- **Reviews** — Read and leave reviews for hotels
- **Responsive UI** — Built with React Bootstrap and Swiper for a modern experience

---

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| React Bootstrap | UI components |
| Axios | HTTP client |
| React Date Range | Date picker |
| React Toastify | Notifications |
| Swiper | Image carousels |

### Backend
| Technology | Purpose |
|------------|---------|
| Express.js | REST API framework |
| MongoDB / Mongoose | Database & ODM |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling |
| CORS | Cross-origin support |
| dotenv | Environment variables |

---

## Project Structure

```
booking-app/
├── public/                     # Static assets (index.html, favicon, etc.)
├── src/                        # Frontend source code
│   ├── assets/                 # Images (city photos, food, hotel logos)
│   ├── components/             # Reusable UI components
│   │   ├── featured/           # Featured properties section
│   │   ├── footer/             # Footer component
│   │   ├── guestLove/          # Guest favorites section
│   │   ├── header/             # Header with search
│   │   ├── navbar/             # Navigation bar
│   │   ├── propertyList/       # Property type listings
│   │   ├── reserve/            # Reservation modal
│   │   ├── review/             # Review display
│   │   └── searchItem/         # Search result item
│   ├── context/                # React Context providers
│   │   ├── AuthContext.jsx     # Authentication state
│   │   └── SearchContext.jsx   # Search state management
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page-level components
│   │   ├── city/               # Individual city pages (9 cities)
│   │   ├── home/               # Home page
│   │   ├── hotel/              # Hotel detail page
│   │   ├── list/               # Search results list
│   │   ├── login/              # Login page
│   │   ├── register/           # Registration page
│   │   └── reservation/        # User reservations page
│   ├── App.js                  # Main app with routing
│   └── index.js                # Entry point
│
├── booking-api/                # Backend API
│   ├── api/
│   │   ├── controllers/        # Route handlers
│   │   │   ├── auth.js         # Login/Register logic
│   │   │   ├── hotel.js        # Hotel CRUD
│   │   │   ├── reservation.js  # Reservation management
│   │   │   ├── review.js       # Review CRUD
│   │   │   ├── room.js         # Room management
│   │   │   └── user.js         # User management
│   │   ├── models/             # Mongoose schemas
│   │   │   ├── hotel.js        # Hotel model
│   │   │   ├── reservation.js  # Reservation model
│   │   │   ├── review.js       # Review model
│   │   │   ├── room.js         # Room model
│   │   │   └── user.js         # User model
│   │   ├── routes/             # Express route definitions
│   │   │   ├── auth.js         # /api/auth
│   │   │   ├── hotel.js        # /api/hotels
│   │   │   ├── reservation.js  # /api/reservation
│   │   │   ├── review.js       # /api/review
│   │   │   ├── room.js         # /api/room
│   │   │   └── user.js         # /api/user
│   │   └── utils/              # Utilities
│   │       ├── error.js        # Custom error handler
│   │       └── verifyToken.js  # JWT verification middleware
│   ├── index.js                # Server entry point
│   └── package.json            # Backend dependencies
│
├── package.json                # Frontend dependencies
└── .env.production             # Production environment config
```

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas)

### Installation

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

### Environment Variables

Create a `.env` file in the `booking-api/` directory:

```env
MONGO=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_jwt_secret_key
PORT=5050
```

### Running the Application

1. **Start the backend API** (runs on `http://localhost:5050`)
   ```bash
   cd booking-api
   npm start
   ```

2. **Start the frontend** (runs on `http://localhost:3000`)
   ```bash
   # From the root directory
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/hotels` | Get all hotels |
| GET | `/api/hotels/:id` | Get hotel by ID |
| GET | `/api/room/:id` | Get room by ID |
| POST | `/api/reservation` | Create a reservation |
| GET | `/api/reservation/:userId` | Get user reservations |
| DELETE | `/api/reservation/:id` | Cancel a reservation |
| GET | `/api/review/:hotelId` | Get reviews for a hotel |
| POST | `/api/review` | Create a review |
| GET | `/api/user/:id` | Get user profile |

---

## Usage Guide

1. **Browse Cities** — Click on city images on the home page to explore city guides with photos and food recommendations
2. **Register/Login** — Use the buttons in the top navigation bar to create an account or sign in
3. **Search Hotels** — Select a city, pick your dates, specify the number of guests, and click Search
4. **View Hotel Details** — Click on any hotel to see its information, photos, pricing, and guest reviews
5. **Make a Reservation** — Click "Reserve" on a hotel page to book available rooms
6. **Manage Reservations** — Navigate to "Reservation" to view all bookings and cancel upcoming ones

---

## Deployment

- **Frontend:** Deployable on Vercel or any static hosting (uses `react-scripts build`)
- **Backend:** Deployable on Vercel (serverless) or any Node.js hosting platform

---

## Disclaimer

All hotel names, addresses, and pricing are fictional and created for demonstration purposes. City information and recommendations are based on general research and may not be fully accurate.

---

## License

ISC

---

## Author

**Trong Nguyen** — [GitHub](https://github.com/TrongNguyenzzz)
