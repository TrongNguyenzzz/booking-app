# Hotel Management & Booking System

A full-stack hotel management and booking application built with React and Express.js. Users can browse hotels across different cities, make reservations, manage bookings, and explore city guides with local recommendations.

## Demo

**Video Demo:** [Watch on YouTube](https://youtu.be/HBzZPsiOX20)

---

## Features

- **User Authentication** - Register and log in with secure JWT-based authentication
- **Hotel Search** - Search hotels by city, date range, and number of guests
- **Hotel Details** - View hotel name, address, description, pricing, and guest reviews
- **Room Reservation** - Reserve available rooms at your chosen hotel
- **Reservation Management** - View all past and current reservations; cancel current bookings
- **City Guides** - Explore city introduction pages with photos of famous places and local food recommendations
- **Property Types** - Browse different property categories (hotels, apartments, resorts, villas)
- **Responsive UI** - Built with React Bootstrap for a clean, responsive experience

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM | Client-side routing |
| React Bootstrap / Bootstrap 5 | UI components and styling |
| Axios | HTTP client |
| React Date Range | Date picker for bookings |
| Swiper | Image carousels and sliders |
| React Toastify | Toast notifications |
| React Icons | Icon library |
| date-fns | Date utility functions |

### Backend

| Technology | Purpose |
|---|---|
| Express.js | Web server framework |
| MongoDB / Mongoose | Database and ODM |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| CORS | Cross-origin resource sharing |
| cookie-parser | Cookie handling |
| dotenv | Environment variable management |

---

## Project Structure

```
booking-app/
├── public/                  # Static assets (index.html, manifest, etc.)
├── src/                     # Frontend source code
│   ├── assets/              # Images and static resources
│   ├── components/          # Reusable UI components
│   │   ├── featured/        # Featured hotels section
│   │   ├── footer/          # Site footer
│   │   ├── guestLove/       # Guest favorites section
│   │   ├── header/          # Site header with search
│   │   ├── navbar/          # Navigation bar
│   │   ├── propertyList/    # Property type listings
│   │   ├── reserve/         # Reservation modal/form
│   │   ├── review/          # Guest reviews
│   │   └── searchItem/      # Search result item
│   ├── context/             # React Context for state management
│   ├── hooks/               # Custom React hooks
│   └── pages/               # Page-level components
│       ├── city/            # City guide pages
│       ├── home/            # Homepage
│       ├── hotel/           # Hotel detail page
│       ├── list/            # Search results listing
│       ├── login/           # Login page
│       ├── register/        # Registration page
│       └── reservation/     # Reservation management
├── booking-api/             # Backend API
│   ├── index.js             # Server entry point
│   ├── api/
│   │   ├── controllers/     # Route handler logic
│   │   ├── models/          # Mongoose schemas/models
│   │   ├── routes/          # Express route definitions
│   │   └── utils/           # Utility functions and middleware
│   └── package.json
├── .env.production          # Production environment variables
├── package.json             # Frontend dependencies and scripts
└── README.md
```

---

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas)
- **nodemon** (installed globally or as a dev dependency for the backend)

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TrongNguyenzzz/booking-app.git
cd booking-app
```

### 2. Backend Setup

```bash
cd booking-api
npm install
```

Create a `.env` file in the `booking-api/` directory with the following variables:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm start
```

The API will run at **http://localhost:5050**.

### 3. Frontend Setup

From the project root directory:

```bash
npm install
```

Start the frontend development server:

```bash
npm start
```

The app will open at **http://localhost:3000**.

---

## Usage

1. **Browse the Homepage** - View featured cities, property types, and top-rated places
2. **Explore a City** - Click on any city image to see an introduction with photos and local food recommendations
3. **Register/Login** - Create an account using the Register button, then log in
4. **Search Hotels** - Enter your destination city, travel dates, and guest count, then click Search
5. **View Hotel Details** - Click on any hotel to see full details, pricing, and guest reviews
6. **Make a Reservation** - Click "Reserve" on a hotel page to book your room
7. **Manage Reservations** - Click "Reservation" in the nav to view or cancel your bookings

---

## Screenshots

### Homepage

![Homepage](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/9b282e0f-c714-470e-8fa0-4fa533ef521c)

### Search Results

![Search Results](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/15f598af-3964-47f6-978f-e64ff3f6f6bc)

### Hotel Detail Page

![Hotel Detail](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/63168646-8d2f-4bf6-92ac-2c4725aa493f)

### Reservation Management

![Reservations](https://github.com/TrongNguyenzzz/booking-app/assets/89328535/249b7b3a-4094-4df5-a520-354118980c9e)

---

## Available Scripts

### Frontend (root directory)

| Command | Description |
|---|---|
| `npm start` | Run the development server on port 3000 |
| `npm run build` | Create a production build |
| `npm test` | Run the test suite |

### Backend (`booking-api/` directory)

| Command | Description |
|---|---|
| `npm start` | Run the API server with nodemon (hot reload) |

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please make sure your code follows the existing project conventions and includes appropriate error handling.

---

## License

This project is licensed under the ISC License.

---

## Disclaimer

All hotel names, addresses, and related information on this site are fictional and created for demonstration purposes. City descriptions are based on general research and may not be fully accurate. This is a portfolio/learning project and not a real booking service.
