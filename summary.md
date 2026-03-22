# Hotel Booking Application - Repository Summary

## Project Overview

This is a full-stack **Hotel Management System** that allows users to make reservations, cancel reservations, browse city guides, and leave hotel reviews. The application was built by [TrongNguyenzzz](https://github.com/TrongNguyenzzz) and a demo video is available at [YouTube](https://youtu.be/HBzZPsiOX20).

The project follows a monorepo structure with a **React** frontend and an **Express/Node.js** API backend, both written entirely in JavaScript using ES modules.

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 (Create React App) | UI framework |
| React Router v6 | Client-side routing |
| Context API + useReducer | Global state management (auth, search) |
| Axios | HTTP client for API calls |
| CSS (plain CSS modules per component) | Styling |
| react-bootstrap | UI components (cards, buttons) |
| Swiper.js | Image carousels / sliders |
| react-date-range | Date picker widgets |
| react-datalist-input | Autocomplete search input |
| react-toastify | Toast notifications |
| react-icons | Icons (Font Awesome, Bootstrap, Material Design) |
| date-fns | Date formatting utilities |

### Backend

| Technology | Purpose |
|---|---|
| Express.js 4 | Web framework |
| Mongoose 7 | MongoDB ODM |
| jsonwebtoken (JWT) | Authentication tokens |
| bcryptjs | Password hashing |
| cookie-parser | Cookie handling for JWT |
| cors | Cross-Origin Resource Sharing |
| dotenv | Environment variable loading |

### Tooling and Deployment

- **Package managers:** npm and pnpm (both lockfiles present in the repo)
- **Deployment target:** Vercel (API README references "Deploy express app to vercel", `.env.production` includes `VERCEL_ANALYTICS_ID`)

---

## Architecture Overview

- **Monorepo** with two logical applications:
  - `booking-api/` - Express.js backend
  - Root `src/` - React frontend (Create React App)
- **Backend** runs on port **5050** (configurable via `PORT` environment variable)
- **Frontend** runs on port **3000** (CRA default)
- Frontend communicates with backend via REST API calls with a **hardcoded base URL** of `http://localhost:5050`
- **MongoDB** connection string is loaded from the `MONGO` environment variable
- **JWT secret** is loaded from the `JWT` environment variable
- Backend follows an **MVC-style pattern**: `models/` (Mongoose schemas), `controllers/` (route handlers), `routes/` (Express Router definitions), `utils/` (middleware and helpers)

---

## Directory Structure

```
booking-app/
├── booking-api/                  # Express.js backend
│   ├── index.js                  # Server entry point, Express app setup, MongoDB connection, route mounting
│   ├── package.json              # Backend dependencies
│   └── api/
│       ├── models/               # Mongoose schemas
│       │   ├── user.js           # User schema
│       │   ├── hotel.js          # Hotel schema
│       │   ├── room.js           # Room schema
│       │   ├── reservation.js    # Reservation schema
│       │   └── review.js         # Review schema
│       ├── controllers/          # Route handlers (business logic)
│       │   ├── auth.js           # Register and login handlers
│       │   ├── hotel.js          # Hotel CRUD + aggregation queries
│       │   ├── room.js           # Room CRUD + availability updates
│       │   ├── reservation.js    # Reservation CRUD + user-specific queries
│       │   ├── review.js         # Review creation and retrieval
│       │   └── user.js           # User CRUD
│       ├── routes/               # Express Router definitions
│       │   ├── auth.js           # Auth routes
│       │   ├── hotel.js          # Hotel routes
│       │   ├── room.js           # Room routes
│       │   ├── reservation.js    # Reservation routes
│       │   ├── review.js         # Review routes
│       │   └── user.js           # User routes
│       └── utils/
│           ├── verifyToken.js    # JWT verification middleware (verifyToken, verifyUser, verifyAdmin)
│           └── error.js          # Custom error creator helper
├── src/                          # React frontend (CRA)
│   ├── index.js                  # ReactDOM.render with context providers wrapping App
│   ├── App.js                    # BrowserRouter with Routes for all pages
│   ├── context/
│   │   ├── AuthContext.jsx       # Auth state management (useReducer)
│   │   └── SearchContext.jsx     # Search state management (useReducer)
│   ├── hooks/
│   │   └── useFetch.js           # Custom data-fetching hook wrapping axios
│   ├── components/
│   │   ├── navbar/Navbar.jsx     # Top navigation bar
│   │   ├── header/Header.jsx     # Search header with autocomplete, date picker, counters
│   │   ├── featured/Featured.jsx # City carousel (Swiper.js)
│   │   ├── propertyList/         # Property type carousel with sub-components
│   │   ├── guestLove/guestLove.jsx # "Best rate places" featured hotels section
│   │   ├── searchItem/SearchItem.jsx # Hotel search result card
│   │   ├── reserve/Reserve.jsx   # Room selection/booking modal
│   │   ├── review/Review.jsx     # Hotel review section with ReviewCard
│   │   └── footer/Footer.jsx     # Page footer
│   ├── pages/
│   │   ├── home/Home.jsx         # Landing page
│   │   ├── list/List.jsx         # Hotel search results page
│   │   ├── hotel/Hotel.jsx       # Individual hotel detail page
│   │   ├── login/Login.jsx       # Login form
│   │   ├── register/Register.jsx # Registration form
│   │   ├── reservation/
│   │   │   ├── Reservation.jsx   # User reservations page (current + past)
│   │   │   └── ReserveCard.jsx   # Individual reservation card
│   │   └── city/                 # 9 static city guide pages
│   └── assets/                   # Static images
│       ├── hotellogo.png         # Site logo
│       ├── cityImg/              # City thumbnail images
│       ├── pageCity/             # Full city page images (organized by city, with food/ subdirs)
│       └── reviewImg/            # Images for GuestLove section
├── public/                       # CRA public directory (index.html, favicon, manifest, robots.txt)
├── package.json                  # Frontend dependencies
├── .env.production               # Vercel analytics config
├── .gitignore                    # Standard CRA gitignore + .env files
└── README.md                     # Project description and testing instructions
```

---

## Data Models (Mongoose Schemas)

### User (`booking-api/api/models/user.js`)

| Field | Type | Notes |
|---|---|---|
| username | String | Required, unique |
| email | String | Required, unique |
| password | String | Required (stored as bcrypt hash) |
| isAdmin | Boolean | Default: false |
| reservations | [ObjectId] | Array of Reservation references |

### Hotel (`booking-api/api/models/hotel.js`)

| Field | Type | Notes |
|---|---|---|
| name | String | Required |
| type | String | Required (e.g., hotel, apartment, resort, villa) |
| city | String | Required |
| address | String | Required |
| distance | String | Required |
| photos | [String] | Array of image URLs |
| title | String | Required |
| desc | String | Required |
| rating | Number | Min: 0, Max: 10 |
| rooms | [ObjectId] | Array of Room references |
| cheapestPrice | Number | Required |
| featured | Boolean | Default: false |
| subSearch | String | Subtitle for search display |
| subDesc | String | Sub-description |

### Room (`booking-api/api/models/room.js`)

| Field | Type | Notes |
|---|---|---|
| title | String | Required |
| price | Number | Required |
| maxPeople | Number | Required |
| desc | String | Required |
| roomNumbers | Array | Each entry: `{ number: Number, unavailableDates: [Date] }` |

### Reservation (`booking-api/api/models/reservation.js`)

| Field | Type | Notes |
|---|---|---|
| user | ObjectId | Reference to User |
| dates | [Date] | Array of reserved dates |
| hotel | ObjectId | Reference to Hotel |
| room | ObjectId | Reference to Room |
| hotelName | String | Denormalized hotel name |
| roomNumber | Number | Denormalized room number |
| hotelPhoto | String | Denormalized hotel photo URL |
| total | Number | Total cost of reservation |

### Review (`booking-api/api/models/review.js`)

| Field | Type | Notes |
|---|---|---|
| userid | ObjectId | Reference to User |
| rate | Number | 0 to 10 |
| comment | String | Review text |
| hotelid | ObjectId | Reference to Hotel |
| username | String | Denormalized username |

> **Note:** The schema variable in `review.js` is misleadingly named `UserSchema`, but the exported model is correctly named `Review`.

---

## Backend API Endpoints

All endpoints are served under `http://localhost:5050`.

### Auth (`/api/auth`)

| Method | Path | Description |
|---|---|---|
| POST | `/register` | Register new user (bcrypt hashed password, salt 10) |
| POST | `/login` | Login - returns JWT in httpOnly cookie `access_token` + user details in JSON body |

### Hotels (`/api/hotels`)

| Method | Path | Description |
|---|---|---|
| POST | `/` | Create a hotel |
| PUT | `/:id` | Update a hotel |
| DELETE | `/:id` | Delete a hotel |
| GET | `/:id` | Get a single hotel |
| GET | `/` | Get hotels (supports query params: `city`, `min`, `max`, `limit`) |
| GET | `/countByCity?cities=city1,city2` | Count hotels per city |
| GET | `/countByType` | Count hotels by type (hotel, apartment, resort, villa, cabin) |
| GET | `/room/:id` | Get all rooms belonging to a hotel |

### Rooms (`/api/room`)

| Method | Path | Description |
|---|---|---|
| POST | `/:hotelid` | Create room (also pushes room ID to `hotel.rooms[]`) |
| PUT | `/availability/:id` | Update room availability (push unavailable dates) |
| PUT | `/:id` | Update a room |
| DELETE | `/:id/:hotelid` | Delete room (also pulls from `hotel.rooms[]`) |
| GET | `/` | Get all rooms |

### Reservations (`/api/reservation`)

| Method | Path | Description |
|---|---|---|
| POST | `/:userId` | Create reservation (also pushes to `user.reservations[]`) |
| PUT | `/:id` | Update a reservation |
| DELETE | `/:id/:userId` | Delete reservation (cleans `user.reservations[]` and removes dates from `room.unavailableDates[]`) |
| GET | `/:id` | Get a single reservation |
| GET | `/` | Get all reservations |
| GET | `/find/:userId` | Get all reservations for a specific user |

### Reviews (`/api/review`)

| Method | Path | Description |
|---|---|---|
| POST | `/` | Create a review |
| GET | `/:id` | Get reviews by user ID |
| GET | `/hotel/:id` | Get reviews by hotel ID |
| GET | `/` | Get all reviews |

### Users (`/api/user`)

| Method | Path | Description |
|---|---|---|
| PUT | `/:id` | Update a user |
| DELETE | `/:id` | Delete a user |
| GET | `/:id` | Get a single user |
| GET | `/` | Get all users |

---

## Frontend Structure

### Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with search header, featured city carousel, property type list, "guest love" section, footer |
| List | `/hotels` | Search results page with sidebar filters (destination, dates, min/max price, guests) and a list of `SearchItem` cards |
| Hotel | `/hotels/:id` | Hotel detail page with photo gallery slider, address, distance, description, price calculation, Reserve button, Reviews section |
| Login | `/login` | Login form (username + password) dispatching to AuthContext |
| Register | `/register` | Registration form (username, password, email) with POST to `/api/auth/register` |
| Reservation | `/reservation` | User's reservations page, split into "Current" and "Past" tabs based on dates |
| City Pages | `/city/<name>` | 9 static city guide pages (Hanoi, Dongha, Tucson, Budapest, Newyork, LA, Seattle, Berlin, London) |

### Components

| Component | Purpose |
|---|---|
| `Navbar` | Top navigation - logo, Register/Login buttons (unauthenticated) or Welcome message + Logout (authenticated) |
| `Header` | Search bar with destination autocomplete (`DatalistInput` with 9 cities), date range picker, guest/room counters, Search button |
| `Featured` | City carousel using Swiper.js showing 9 cities with images; clicking navigates to city pages |
| `PropertyList` | Property type carousel with sub-components for Hotel, Apartment, Resort, Villa views |
| `GuestLove` | "Best rate places" section with 4 hardcoded featured hotels linking to specific MongoDB ObjectIds |
| `SearchItem` | Hotel search result card showing photo, name, distance, type, rating, price with "See availability" link |
| `Reserve` | Room selection modal - fetches hotel rooms, checks availability against selected dates, allows multi-room booking with toast notifications |
| `Review` / `ReviewCard` | Hotel review section - displays existing reviews, allows authenticated users to add reviews (rate + comment) |
| `Footer` | Page footer |

### Context (Global State)

- **AuthContext** (`src/context/AuthContext.jsx`): Manages authentication state (`user`, `loading`, `error`) via `useReducer`. Supports `LOGIN_START`, `LOGIN_SUCCESS`, `LOGIN_FAILURE`, and `LOGOUT` actions. User data is persisted to `localStorage`.
- **SearchContext** (`src/context/SearchContext.jsx`): Manages search state (`city`, `dates`, `options`) via `useReducer`. Supports `NEW_SEARCH` and `RESET_SEARCH` actions.

Both contexts wrap the entire app in `src/index.js`.

### Hooks

- **useFetch** (`src/hooks/useFetch.js`): Custom hook wrapping `axios.get` with `loading`, `data`, `error` state and a `reFetch` function for manual re-fetching.

---

## Authentication Flow

1. **Registration:** User submits username/email/password via `POST /api/auth/register`. Password is hashed with bcryptjs (salt rounds: 10) and stored in MongoDB.
2. **Login:** User submits username/password via `POST /api/auth/login`. Server finds user, compares password hash, creates a JWT containing `{ id, isAdmin }`, and sets it as an httpOnly cookie named `access_token`. User details are returned in the JSON response body.
3. **Frontend state:** On successful login, the frontend dispatches `LOGIN_SUCCESS` to `AuthContext`, storing user details and persisting them to `localStorage`.
4. **JWT middleware:** `verifyToken.js` exports three middleware functions:
   - `verifyToken` - Extracts and verifies the JWT from the `access_token` cookie
   - `verifyUser` - Verifies the user is themselves or an admin
   - `verifyAdmin` - Verifies the user is an admin
5. **Important:** Most routes currently do **not** use the auth middleware (it is imported but commented out or not applied in many route files). Most endpoints are effectively public.
6. **Logout:** Dispatches `LOGOUT` action, clearing context state and `localStorage`.

---

## Reservation Flow

1. User searches from the `Header` component (destination, dates, guest count). The search is dispatched to `SearchContext`.
2. Search navigates to `/hotels` (the `List` page), which fetches hotels filtered by city and price range.
3. User clicks "See availability" on a `SearchItem` to navigate to the hotel detail page (`/hotels/:id`).
4. The hotel page displays info, photos (clickable slider), price calculation (`cheapestPrice * days * rooms`), and reviews.
5. Clicking "Reserve" opens the `Reserve` modal, which fetches the hotel's rooms and checks each room number's availability against the selected dates.
6. User selects one or more rooms via checkboxes and clicks "Reserve now".
7. For each selected room:
   - `PUT /api/room/availability/:id` adds the selected dates to the room's `unavailableDates`
   - `POST /api/reservation/:userId` creates a reservation record and links it to the user
8. **Cancellation:** `DELETE /api/reservation/:id/:userId` removes the reservation from `user.reservations[]` and cleans up the `unavailableDates` array on the corresponding room.

---

## Review System

- Users can view reviews on any hotel detail page via the `Review` component.
- **Authenticated** users can add reviews consisting of a rating (0-10 scale) and a text comment.
- Reviews are displayed using the `ReviewCard` sub-component, showing the username, rating, and comment.
- Reviews are fetched per hotel via `GET /api/review/hotel/:id`.

---

## Key Libraries and Dependencies

### Frontend (`package.json` at root)

- `react` / `react-dom` 18.x - UI framework
- `react-router-dom` 6.x - Routing
- `axios` - HTTP client
- `react-bootstrap` / `bootstrap` - UI component library
- `swiper` - Touch-enabled carousels/sliders
- `react-date-range` - Date range picker
- `react-datalist-input` - Autocomplete search input
- `react-toastify` - Toast notification system
- `react-icons` - Icon sets (FontAwesome, Bootstrap Icons, Material Design)
- `date-fns` - Date utility functions
- `react-scripts` - CRA build tooling

### Backend (`booking-api/package.json`)

- `express` 4.x - Web framework
- `mongoose` 7.x - MongoDB ODM
- `jsonwebtoken` - JWT creation and verification
- `bcryptjs` - Password hashing
- `cookie-parser` - Parse cookies from requests
- `cors` - Enable CORS
- `dotenv` - Load `.env` files
- `nodemon` - Development auto-restart (devDependency)

---

## City Pages

The application features **9 static city guide pages**, each with its own dedicated route:

| City | Route |
|---|---|
| Hanoi | `/city/hanoi` |
| Dong Ha | `/city/dongha` |
| Tucson | `/city/tucson` |
| Budapest | `/city/budapest` |
| New York | `/city/newyork` |
| Los Angeles | `/city/la` |
| Seattle | `/city/seattle` |
| Berlin | `/city/berlin` |
| London | `/city/london` |

Each city page includes:
- A text description of the city
- A photo gallery with 6 landmark photos displayed in a slider
- A "Best Dishes" section with 5 food recommendations including photos and ingredient lists

These pages are **entirely static/hardcoded** with no dynamic data fetching from the backend.

---

## Development Setup Instructions

### Prerequisites

- Node.js (backend `package.json` specifies `engines.node: "14.x"`, though ES module syntax is used throughout)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

### Environment Variables

Create a `.env` file in `booking-api/` with:

```
MONGO=<your-mongodb-connection-string>
JWT=<your-jwt-secret>
PORT=5050
```

### Running the Application

1. **Clone the repository**

2. **Start the backend:**
   ```bash
   cd booking-api
   npm install
   npm start   # or: npx nodemon index.js
   ```

3. **Start the frontend:**
   ```bash
   cd ..       # back to root
   npm install
   npm start   # CRA dev server on port 3000
   ```

4. Open `http://localhost:3000` in your browser.

---

## Notable Design Decisions and Observations

- **Hardcoded API URL:** The API base URL (`http://localhost:5050`) is hardcoded throughout frontend components rather than being pulled from an environment variable. This would need to be addressed for production deployment.

- **ES modules everywhere:** Both frontend and backend use `"type": "module"` in their respective `package.json` files.

- **Node version mismatch:** The backend `package.json` specifies `"engines": { "node": "14.x" }` but uses ES module syntax (`import`/`export`), which requires special handling on Node 14. Modern Node versions are recommended.

- **Auth middleware largely unused:** Although `verifyAdmin` and `verifyUser` are imported in some route files, they are not actually applied to most routes. Most API endpoints are effectively public/unprotected.

- **verifyAdmin bug:** The `verifyAdmin` function passes `next` as both the third argument to `verifyToken` and as a callback, which may cause admin verification to not work correctly.

- **Legacy React API:** The frontend uses React 18 but still calls the legacy `ReactDOM.render()` API instead of the new `createRoot()` API.

- **No test suite:** Only the default CRA placeholder test (`src/App.test.js`) exists. There are no backend tests and no meaningful frontend tests.

- **Misleading schema name:** The review model file (`review.js`) internally names the schema variable `UserSchema`, though the exported Mongoose model is correctly named `Review`.

- **Hardcoded MongoDB ObjectIds:** The `GuestLove` component references specific MongoDB ObjectIds to link to featured hotels. These would break if the database is re-seeded.

- **Password field on login page:** The password input on the login page uses `type="text"` instead of `type="password"`, meaning the password is visible as the user types.

- **Room availability tracking:** Availability is tracked per individual room number via an `unavailableDates` array of `Date` objects. The reservation deletion flow properly cleans up both `user.reservations[]` and `room.unavailableDates[]`.

- **Denormalized data in reservations:** The `Reservation` model stores copies of `hotelName`, `roomNumber`, and `hotelPhoto` for display convenience, rather than always joining via ObjectId references.

- **City pages are fully static:** All 9 city guide pages contain hardcoded text and local image assets with no backend interaction.
