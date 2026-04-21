# Hotel Management System - Complete Workflow

## 1. System Architecture Overview

```mermaid
graph TB
    subgraph Frontend ["React Frontend (localhost:3000)"]
        App[App.js - Router]
        AuthCtx[AuthContext - Auth State]
        SearchCtx[SearchContext - Search State]
        UseFetch[useFetch Hook - API Calls]
    end

    subgraph Backend ["Express Backend API (localhost:5050)"]
        Server[index.js - Express Server]
        Middleware[Middleware: CORS, CookieParser, JSON]
        AuthRoutes["/api/auth"]
        UserRoutes["/api/user"]
        HotelRoutes["/api/hotels"]
        RoomRoutes["/api/room"]
        ReservationRoutes["/api/reservation"]
        ReviewRoutes["/api/review"]
    end

    subgraph Database ["MongoDB"]
        UsersCol[(Users)]
        HotelsCol[(Hotels)]
        RoomsCol[(Rooms)]
        ReservationsCol[(Reservations)]
        ReviewsCol[(Reviews)]
    end

    App -->|HTTP Requests via Axios| Server
    Server --> Middleware
    Middleware --> AuthRoutes
    Middleware --> UserRoutes
    Middleware --> HotelRoutes
    Middleware --> RoomRoutes
    Middleware --> ReservationRoutes
    Middleware --> ReviewRoutes

    AuthRoutes --> UsersCol
    UserRoutes --> UsersCol
    HotelRoutes --> HotelsCol
    HotelRoutes --> RoomsCol
    RoomRoutes --> RoomsCol
    ReservationRoutes --> ReservationsCol
    ReservationRoutes --> UsersCol
    ReservationRoutes --> RoomsCol
    ReviewRoutes --> ReviewsCol
```

## 2. Frontend Component Hierarchy

```mermaid
graph TD
    Index[index.js] --> AuthProvider[AuthContextProvider]
    AuthProvider --> SearchProvider[SearchContextProvider]
    SearchProvider --> AppComp[App.js - BrowserRouter]

    AppComp --> HomeRoute["/ - Home"]
    AppComp --> HotelsRoute["/hotels - List"]
    AppComp --> HotelRoute["/hotels/:id - Hotel"]
    AppComp --> LoginRoute["/login - Login"]
    AppComp --> RegisterRoute["/register - Register"]
    AppComp --> ReservationRoute["/reservation - Reservation"]
    AppComp --> CityRoutes["/hanoi, /berlin, /london, etc. - City Pages"]

    HomeRoute --> Navbar
    HomeRoute --> Header
    HomeRoute --> Featured[Featured - City Carousel]
    HomeRoute --> PropertyList[PropertyList - Property Types]
    HomeRoute --> GuestLove[GuestLove - Best Rated]
    HomeRoute --> Footer

    HotelsRoute --> Navbar2[Navbar]
    HotelsRoute --> Header2[Header]
    HotelsRoute --> SearchItem[SearchItem - Hotel Cards]

    HotelRoute --> Navbar3[Navbar]
    HotelRoute --> Header3[Header]
    HotelRoute --> ReserveModal[Reserve Modal]
    HotelRoute --> ReviewComp[Review Component]
    ReviewComp --> ReviewCard[ReviewCard]

    ReservationRoute --> Navbar4[Navbar]
    ReservationRoute --> Header4[Header]
    ReservationRoute --> ReserveCard[ReserveCard - Current/Past]
```

## 3. User Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant R as React Frontend
    participant AC as AuthContext
    participant API as Express API
    participant DB as MongoDB

    Note over U,DB: Registration Flow
    U->>R: Fill username, email, password on /register
    R->>API: POST /api/auth/register {username, email, password}
    API->>API: Hash password with bcrypt
    API->>DB: Save new User document
    DB-->>API: User created
    API-->>R: 200 "New user has been created"
    R->>U: Toast "Register successfully!"

    Note over U,DB: Login Flow
    U->>R: Enter username, password on /login
    R->>AC: dispatch(LOGIN_START)
    R->>API: POST /api/auth/login {username, password}
    API->>DB: Find user by username
    DB-->>API: User document
    API->>API: Compare password with bcrypt
    API->>API: Generate JWT token (id, isAdmin)
    API-->>R: Set cookie "access_token" + return {details, isAdmin}
    R->>AC: dispatch(LOGIN_SUCCESS, payload)
    AC->>AC: Save user to localStorage
    R->>U: Navigate to Home "/"

    Note over U,DB: Logout Flow
    U->>R: Click Logout in Navbar
    R->>AC: dispatch(LOGOUT)
    AC->>AC: Clear user from localStorage
    R->>U: Navigate to Home "/"
```

## 4. Hotel Search and Browsing Flow

```mermaid
sequenceDiagram
    participant U as User
    participant H as Header Component
    participant SC as SearchContext
    participant L as List Page
    participant API as Express API
    participant DB as MongoDB

    U->>H: Select city, dates, guest options
    H->>SC: dispatch(NEW_SEARCH, {destination, dates, options})
    H->>L: Navigate to /hotels with state

    L->>API: GET /api/hotels?city={city}&min={min}&max={max}
    API->>DB: Hotel.find({city, cheapestPrice: {$gt: min, $lt: max}})
    DB-->>API: Array of matching hotels
    API-->>L: Hotel list JSON

    L->>U: Render SearchItem cards (name, photo, rating, price)
    U->>U: Click "See availability" on a hotel
    U->>L: Navigate to /hotels/:id
```

## 5. Hotel Detail and Room Reservation Flow

```mermaid
sequenceDiagram
    participant U as User
    participant HP as Hotel Page
    participant RM as Reserve Modal
    participant API as Express API
    participant DB as MongoDB

    HP->>API: GET /api/hotels/:id
    API->>DB: Hotel.findById(id)
    DB-->>API: Hotel document
    API-->>HP: Hotel data (name, photos, address, desc, price, rating)

    U->>HP: Click "Reserve or Book Now!"
    Note over HP: If not logged in, redirect to /login

    HP->>RM: Open Reserve Modal
    RM->>API: GET /api/hotels/room/:hotelId
    API->>DB: Find hotel, then Room.findById for each room ID
    DB-->>API: Array of Room documents
    API-->>RM: Room list with roomNumbers and unavailableDates

    RM->>RM: Check availability (compare selected dates vs unavailableDates)
    U->>RM: Select available rooms via checkboxes
    U->>RM: Click "Reserve now"

    loop For each selected room
        RM->>API: PUT /api/room/availability/:roomNumberId {dates}
        API->>DB: Push dates to roomNumbers.$.unavailableDates
        RM->>API: POST /api/reservation/:userId {user, room, dates, hotel, hotelName, roomNumber, hotelPhoto, total}
        API->>DB: Save Reservation document
        API->>DB: Push reservation ID to User.reservations
    end

    API-->>RM: Reservation created
    RM->>U: Toast "Reserve successfully!"
```

## 6. Reservation Management Flow

```mermaid
sequenceDiagram
    participant U as User
    participant RP as Reservation Page
    participant RC as ReserveCard
    participant API as Express API
    participant DB as MongoDB

    U->>RP: Navigate to /reservation
    RP->>API: GET /api/reservation/find/:userId
    API->>DB: Find User, then Reservation.findById for each reservation ID
    DB-->>API: Array of Reservation documents
    API-->>RP: Reservation list

    RP->>RP: Split into Current (end date >= today) and Past (end date < today)
    RP->>U: Render ReserveCards for current and past reservations

    Note over U,DB: Cancel Reservation (current only)
    U->>RC: Click "Cancel reservation"
    RC->>API: DELETE /api/reservation/:reservationId/:userId
    API->>DB: Remove reservation ID from User.reservations
    API->>DB: Get reservation dates and room ID
    API->>DB: Delete Reservation document
    API->>DB: Pull each date from Room.roomNumbers.$.unavailableDates
    API-->>RC: "Delete the reservation successfully!"
    RC->>U: Toast "Delete reservation successfully!"
```

## 7. Review System Flow

```mermaid
sequenceDiagram
    participant U as User
    participant RV as Review Component
    participant API as Express API
    participant DB as MongoDB

    RV->>API: GET /api/review/hotel/:hotelId
    API->>DB: Review.find({hotelid: hotelId})
    DB-->>API: Array of Review documents
    API-->>RV: Reviews list
    RV->>U: Render ReviewCards (username, rate, comment)

    Note over U,DB: Add Review (logged-in users only)
    U->>RV: Click "+ Add your review"
    U->>RV: Enter rate and comment
    U->>RV: Click "Post"
    RV->>API: POST /api/review {userid, rate, comment, hotelid, username}
    API->>DB: Save Review document
    DB-->>API: Saved review
    API-->>RV: Review created
    RV->>U: Toast "Reserve successfully!"
```

## 8. City Exploration Flow

```mermaid
graph LR
    Home[Home Page] --> Featured[Featured Carousel - Swiper]
    Featured --> Hanoi[/hanoi]
    Featured --> Budapest[/budapest]
    Featured --> Tucson[/tucson]
    Featured --> Dongha[/dongha]
    Featured --> NewYork[/newyork]
    Featured --> LA[/la]
    Featured --> Seattle[/seattle]
    Featured --> Berlin[/berlin]
    Featured --> London[/london]

    Hanoi --> CityPage[City Page: Photos, Description, Food Recommendations]
    Budapest --> CityPage
    Tucson --> CityPage
    Dongha --> CityPage
    NewYork --> CityPage
    LA --> CityPage
    Seattle --> CityPage
    Berlin --> CityPage
    London --> CityPage
```

## 9. Data Models (Entity Relationship Diagram)

```mermaid
erDiagram
    USER {
        string _id PK
        string username UK
        string email UK
        string password
        boolean isAdmin
        string[] reservations FK
        date createdAt
        date updatedAt
    }

    HOTEL {
        string _id PK
        string name
        string type
        string city
        string address
        string distance
        string[] photos
        string title
        string desc
        number rating
        string subDesc
        string[] rooms FK
        number cheapestPrice
        boolean featured
        string subSearch
    }

    ROOM {
        string _id PK
        string title
        number price
        number maxPeople
        string desc
        object[] roomNumbers
        date createdAt
        date updatedAt
    }

    RESERVATION {
        string _id PK
        string user FK
        date[] dates
        string hotel FK
        string room FK
        string hotelName
        number roomNumber
        string hotelPhoto
        number total
        date createdAt
        date updatedAt
    }

    REVIEW {
        string _id PK
        string userid FK
        number rate
        string comment
        string hotelid FK
        string username
        date createdAt
        date updatedAt
    }

    USER ||--o{ RESERVATION : "has many"
    HOTEL ||--o{ ROOM : "contains"
    HOTEL ||--o{ RESERVATION : "booked at"
    ROOM ||--o{ RESERVATION : "reserved"
    USER ||--o{ REVIEW : "writes"
    HOTEL ||--o{ REVIEW : "receives"
```

## 10. API Routes Summary

```mermaid
graph LR
    subgraph Auth ["/api/auth"]
        A1["POST /register - Register new user"]
        A2["POST /login - Login with JWT cookie"]
    end

    subgraph Users ["/api/user"]
        U1["GET / - Get all users"]
        U2["GET /:id - Get user by ID"]
        U3["PUT /:id - Update user"]
        U4["DELETE /:id - Delete user"]
    end

    subgraph Hotels ["/api/hotels"]
        H1["GET / - Search hotels with filters"]
        H2["GET /:id - Get hotel by ID"]
        H3["POST / - Create hotel"]
        H4["PUT /:id - Update hotel"]
        H5["DELETE /:id - Delete hotel"]
        H6["GET /countByCity - Count hotels per city"]
        H7["GET /countByType - Count hotels per type"]
        H8["GET /room/:id - Get rooms for a hotel"]
    end

    subgraph Rooms ["/api/room"]
        R1["GET / - Get all rooms"]
        R2["POST /:hotelid - Create room for hotel"]
        R3["PUT /:id - Update room"]
        R4["PUT /availability/:id - Update room availability"]
        R5["DELETE /:id/:hotelid - Delete room"]
    end

    subgraph Reservations ["/api/reservation"]
        RV1["GET / - Get all reservations"]
        RV2["GET /:id - Get reservation by ID"]
        RV3["GET /find/:userId - Get user reservations"]
        RV4["POST /:userId - Create reservation"]
        RV5["PUT /:id - Update reservation"]
        RV6["DELETE /:id/:userId - Cancel reservation"]
    end

    subgraph Reviews ["/api/review"]
        RE1["GET / - Get all reviews"]
        RE2["GET /:id - Get reviews by user ID"]
        RE3["GET /hotel/:id - Get reviews by hotel ID"]
        RE4["POST / - Create review"]
    end
```

## 11. Complete User Journey

```mermaid
flowchart TD
    Start([User visits site]) --> Home[Home Page]
    Home --> ExploreCities{Explore Cities?}
    ExploreCities -->|Yes| CityPage[City Page with photos and food]
    CityPage --> Home
    ExploreCities -->|No| BrowseProperties{Browse Properties?}
    BrowseProperties -->|Yes| PropertyTypes[View Hotels/Villas/Apartments/Resorts]
    PropertyTypes --> Home
    BrowseProperties -->|No| WantToBook{Want to book?}

    WantToBook -->|Yes| LoggedIn{Logged in?}
    LoggedIn -->|No| HasAccount{Has account?}
    HasAccount -->|No| Register[Register Page]
    Register -->|Success| LoginPage[Login Page]
    HasAccount -->|Yes| LoginPage
    LoginPage -->|Success| Home
    LoggedIn -->|Yes| Search[Search: City + Dates + Guests]

    Search --> Results[Hotel List Page]
    Results --> SelectHotel[Click See Availability]
    SelectHotel --> HotelDetail[Hotel Detail Page]
    HotelDetail --> ViewReviews[View Reviews]
    HotelDetail --> WriteReview[Write a Review]
    HotelDetail --> Reserve[Click Reserve or Book Now]

    Reserve --> SelectRooms[Select Available Rooms]
    SelectRooms --> Confirm[Click Reserve Now]
    Confirm --> Success([Reservation Created])

    Home --> ManageReservations[Reservation Page]
    ManageReservations --> ViewCurrent[View Current Reservations]
    ManageReservations --> ViewPast[View Past Reservations]
    ViewCurrent --> Cancel{Cancel?}
    Cancel -->|Yes| Cancelled([Reservation Cancelled + Room Freed])
    Cancel -->|No| Done([Done])
```
