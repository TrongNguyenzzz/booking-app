# Hotel Booking Application - Workflow Diagram

## 1. High-Level System Architecture

```mermaid
graph TB
    subgraph Frontend["React Frontend (localhost:3000)"]
        App[App.js - Router]
        AuthCtx[AuthContext]
        SearchCtx[SearchContext]
        Pages[Pages]
        Components[Components]
    end

    subgraph Backend["Express API (localhost:5050)"]
        Middleware[Middleware - CORS, cookie-parser, JSON]
        Routes[API Routes]
        Controllers[Controllers]
        VerifyToken[JWT Verification - verifyToken]
    end

    subgraph Database["MongoDB"]
        Users[(Users Collection)]
        Hotels[(Hotels Collection)]
        Rooms[(Rooms Collection)]
        Reservations[(Reservations Collection)]
        Reviews[(Reviews Collection)]
    end

    Frontend -->|HTTP Requests + Cookies| Backend
    Backend -->|JSON Responses| Frontend
    Routes --> Controllers
    Controllers -->|Mongoose ODM| Database
    Middleware --> Routes
    VerifyToken --> Routes
```

## 2. Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant AuthContext
    participant API as Express API
    participant DB as MongoDB

    Note over User, DB: Registration Flow
    User->>Browser: Fill register form (username, email, password)
    Browser->>API: POST /api/auth/register
    API->>API: Hash password with bcryptjs
    API->>DB: Create new User document
    DB-->>API: User created
    API-->>Browser: 200 OK

    Note over User, DB: Login Flow
    User->>Browser: Fill login form (username, password)
    Browser->>AuthContext: dispatch(LOGIN_START)
    AuthContext-->>Browser: loading = true
    Browser->>API: POST /api/auth/login
    API->>DB: Find user by username
    DB-->>API: User document
    API->>API: bcrypt.compare(password, hashedPassword)
    API->>API: Generate JWT (payload: {id, isAdmin})
    API-->>Browser: Set HTTP-only cookie "access_token" + user details + isAdmin
    Browser->>AuthContext: dispatch(LOGIN_SUCCESS, user)
    AuthContext->>Browser: Store user in localStorage
    AuthContext-->>Browser: user = userData, loading = false

    Note over User, DB: Logout Flow
    User->>Browser: Click Logout
    Browser->>AuthContext: dispatch(LOGOUT)
    AuthContext->>Browser: Clear user from localStorage
    AuthContext-->>Browser: user = null

    Note over User, DB: App Load - Persistence
    Browser->>Browser: Read user from localStorage
    Browser->>AuthContext: Initialize state with stored user
```

## 3. Hotel Search and Browsing Flow

```mermaid
flowchart TD
    subgraph HomePage["Home Page (/)"]
        Navbar[Navbar - Register/Login or Welcome + Logout]
        Header[Header - Search Bar]
        Featured[Featured - Swiper Carousel of 9 Cities]
        PropertyList[PropertyList - Property Types]
        GuestLove[GuestLove - Best Rated Properties]
    end

    subgraph SearchBar["Header Search Components"]
        CityInput[DatalistInput - City Autocomplete]
        DatePicker[DateRange Picker]
        GuestOptions[Guest/Room Counters]
        SearchBtn[Search Button]
    end

    subgraph SearchFlow["Search Flow"]
        Dispatch[SearchContext dispatches NEW_SEARCH]
        Navigate["Navigate to /hotels with state"]
        ListPage["List Page"]
        APICall["GET /api/hotels?city=X&min=Y&max=Z"]
        Results[Display SearchItem Components]
    end

    subgraph HotelDetail["Hotel Detail Page (/hotels/:id)"]
        FetchHotel["GET /api/hotels/:id"]
        PhotoSlider[Photo Slider]
        HotelInfo[Hotel Info + Description]
        PriceCalc[Price Calculation - nights x rooms x price]
        ReserveBtn["Reserve or Book Now Button"]
        ReviewSection[Review Section]
    end

    Header --> SearchBar
    CityInput --> SearchBtn
    DatePicker --> SearchBtn
    GuestOptions --> SearchBtn
    SearchBtn --> Dispatch
    Dispatch --> Navigate
    Navigate --> ListPage
    ListPage --> APICall
    APICall --> Results
    Results -->|Click hotel| FetchHotel
    FetchHotel --> PhotoSlider
    FetchHotel --> HotelInfo
    FetchHotel --> PriceCalc
    FetchHotel --> ReserveBtn
    FetchHotel --> ReviewSection
    Featured -->|Click city| CityPages["City Introduction Page"]
```

## 4. Room Reservation Booking Flow

```mermaid
sequenceDiagram
    participant User
    participant HotelPage as Hotel Page
    participant AuthCtx as AuthContext
    participant Modal as Reserve Modal
    participant API as Express API
    participant DB as MongoDB

    User->>HotelPage: Click "Reserve or Book Now"
    HotelPage->>AuthCtx: Check if user is logged in

    alt Not Logged In
        AuthCtx-->>HotelPage: user = null
        HotelPage->>User: Redirect to /login
    else Logged In
        AuthCtx-->>HotelPage: user exists
        HotelPage->>Modal: Open Reserve Modal
        Modal->>API: GET /api/hotels/room/:hotelId
        API->>DB: Fetch rooms for hotel
        DB-->>API: Room documents with roomNumbers
        API-->>Modal: Room list with unavailableDates

        loop For Each Room Number
            Modal->>Modal: Check if selected dates overlap with unavailableDates
            alt Available
                Modal->>Modal: Show checkbox (enabled)
            else Unavailable
                Modal->>Modal: Show checkbox (disabled)
            end
        end

        User->>Modal: Select available rooms via checkboxes
        User->>Modal: Click "Reserve now"

        loop For Each Selected Room
            Modal->>API: PUT /api/room/availability/:roomId
            Note right of API: Push selected dates to unavailableDates
            API->>DB: Update Room.roomNumbers.unavailableDates
            DB-->>API: Updated
        end

        Modal->>API: POST /api/reservation/:userId
        Note right of API: Body: {user, dates, hotel, room, hotelName, roomNumber, hotelPhoto, total}
        API->>DB: Create Reservation document
        API->>DB: Push reservation ID to User.reservations[]
        DB-->>API: Reservation created
        API-->>Modal: Success
        Modal->>User: Close modal / Navigate away
    end
```

## 5. Reservation Management Flow

```mermaid
flowchart TD
    subgraph ReservationPage["Reservation Page (/reservation)"]
        FetchRes["GET /api/reservation/find/:userId"]
        CurrentRes["Current Reservations (endDate >= today)"]
        PastRes["Past Reservations (endDate < today)"]
    end

    subgraph ReserveCard["ReserveCard Component"]
        HotelPhoto[Hotel Photo]
        HotelName[Hotel Name]
        RoomNumber[Room Number]
        Dates[Reservation Dates]
        Total[Total Price]
        CancelBtn[Cancel Reservation Button]
    end

    subgraph CancelFlow["Cancel Reservation Flow"]
        ConfirmCancel[User clicks Cancel]
        DeleteAPI["DELETE /api/reservation/:reserveId/:userId"]
        RemoveFromUser["Remove reservation ID from User.reservations[]"]
        FreeDates["Remove dates from Room.roomNumbers.unavailableDates"]
        DeleteDoc["Delete Reservation document"]
    end

    FetchRes --> CurrentRes
    FetchRes --> PastRes
    CurrentRes --> ReserveCard
    PastRes --> ReserveCard
    CancelBtn --> ConfirmCancel
    ConfirmCancel --> DeleteAPI
    DeleteAPI --> RemoveFromUser
    DeleteAPI --> FreeDates
    DeleteAPI --> DeleteDoc
```

```mermaid
sequenceDiagram
    participant User
    participant ResPage as Reservation Page
    participant API as Express API
    participant DB as MongoDB

    User->>ResPage: Navigate to /reservation
    ResPage->>API: GET /api/reservation/find/:userId
    API->>DB: Find reservations where user = userId
    DB-->>API: Reservation documents
    API-->>ResPage: Reservation list

    ResPage->>ResPage: Split into current (endDate >= today) and past (endDate < today)
    ResPage->>User: Display ReserveCard components

    User->>ResPage: Click "Cancel reservation" on a current reservation
    ResPage->>API: DELETE /api/reservation/:reserveId/:userId
    API->>DB: Remove reservation ID from User.reservations[]
    API->>DB: Remove dates from Room.roomNumbers.unavailableDates
    API->>DB: Delete Reservation document
    DB-->>API: Deleted
    API-->>ResPage: Success
    ResPage->>User: Refresh reservation list
```

## 6. Review System Flow

```mermaid
sequenceDiagram
    participant User
    participant HotelPage as Hotel Page
    participant ReviewComp as Review Component
    participant API as Express API
    participant DB as MongoDB

    Note over User, DB: Viewing Reviews
    HotelPage->>API: GET /api/review/hotel/:hotelId
    API->>DB: Find reviews where hotelid = hotelId
    DB-->>API: Review documents
    API-->>HotelPage: Reviews list
    HotelPage->>ReviewComp: Render ReviewCard for each review

    Note over User, DB: Adding a Review (Authenticated Users Only)
    User->>ReviewComp: Click "+ Add your review"
    ReviewComp->>User: Show rate and comment input fields
    User->>ReviewComp: Enter rate (0-10) and comment
    User->>ReviewComp: Submit review
    ReviewComp->>API: POST /api/review
    Note right of API: Body: {userid, rate, comment, hotelid, username}
    API->>DB: Create Review document
    DB-->>API: Review created
    API-->>ReviewComp: Success
    ReviewComp->>HotelPage: Refresh reviews list
```

## 7. Data Model Relationships (ER Diagram)

```mermaid
erDiagram
    USER {
        String username UK
        String email UK
        String password
        Boolean isAdmin
        ObjectId[] reservations
        Date createdAt
        Date updatedAt
    }

    HOTEL {
        String name
        String type
        String city
        String address
        String distance
        String[] photos
        String title
        String desc
        Number rating
        String subDesc
        ObjectId[] rooms
        Number cheapestPrice
        Boolean featured
        String subSearch
    }

    ROOM {
        String title
        Number price
        Number maxPeople
        String desc
        Object[] roomNumbers
    }

    RESERVATION {
        ObjectId user
        Date[] dates
        ObjectId hotel
        ObjectId room
        String hotelName
        Number roomNumber
        String hotelPhoto
        Number total
        Date createdAt
        Date updatedAt
    }

    REVIEW {
        String userid
        Number rate
        String comment
        String hotelid
        String username
        Date createdAt
        Date updatedAt
    }

    USER ||--o{ RESERVATION : "has many"
    HOTEL ||--o{ ROOM : "contains"
    HOTEL ||--o{ RESERVATION : "booked at"
    ROOM ||--o{ RESERVATION : "reserved"
    USER ||--o{ REVIEW : "writes"
    HOTEL ||--o{ REVIEW : "receives"
```

## 8. Frontend Component Architecture

```mermaid
graph TD
    App[App.js - BrowserRouter]

    subgraph Routes["Routes"]
        Home["/ - Home Page"]
        List["/hotels - List Page"]
        HotelPage["/hotels/:id - Hotel Page"]
        Login["/login - Login Page"]
        Register["/register - Register Page"]
        Reservation["/reservation - Reservation Page"]
        CityPages["/hanoi, /dongha, /tucson, /budapest, /newyork, /la, /seattle, /berlin, /london"]
    end

    subgraph SharedComponents["Shared Components"]
        Navbar["Navbar"]
        Header["Header"]
        Footer["Footer"]
    end

    subgraph HomeComponents["Home Page Components"]
        Featured["Featured (Swiper Carousel)"]
        PropertyList["PropertyList"]
        GuestLove["GuestLove"]
    end

    subgraph HotelComponents["Hotel Page Components"]
        Reserve["Reserve Modal"]
        Review["Review Component"]
    end

    subgraph ListComponents["List Page Components"]
        SearchItem["SearchItem"]
    end

    subgraph ReservationComponents["Reservation Components"]
        ReserveCard["ReserveCard"]
    end

    subgraph StateManagement["State Management (Context API)"]
        AuthContext["AuthContext (useReducer)"]
        SearchContext["SearchContext (useReducer)"]
    end

    App --> Routes
    Home --> Navbar
    Home --> Header
    Home --> Featured
    Home --> PropertyList
    Home --> GuestLove
    Home --> Footer
    List --> Navbar
    List --> Header
    List --> SearchItem
    HotelPage --> Navbar
    HotelPage --> Header
    HotelPage --> Reserve
    HotelPage --> Review
    Reservation --> Navbar
    Reservation --> ReserveCard

    AuthContext -->|"user, loading, error"| Navbar
    AuthContext -->|"user"| HotelPage
    AuthContext -->|"user"| Reservation
    SearchContext -->|"city, dates, options"| Header
    SearchContext -->|"search state"| List
```

## 9. Complete API Routes Summary

```mermaid
graph LR
    subgraph AuthRoutes["Auth Routes (/api/auth)"]
        AR1["POST /register - Create user"]
        AR2["POST /login - Authenticate + JWT cookie"]
    end

    subgraph HotelRoutes["Hotel Routes (/api/hotels)"]
        HR1["POST / - Create hotel"]
        HR2["PUT /:id - Update hotel"]
        HR3["DELETE /:id - Delete hotel"]
        HR4["GET /:id - Get single hotel"]
        HR5["GET / - Get all hotels (city, min, max, limit)"]
        HR6["GET /countByCity?cities=x,y,z - Count by city"]
        HR7["GET /countByType - Count by type"]
        HR8["GET /room/:id - Get hotel rooms"]
    end

    subgraph RoomRoutes["Room Routes (/api/room)"]
        RR1["POST /:hotelid - Create room"]
        RR2["PUT /availability/:id - Update availability"]
        RR3["PUT /:id - Update room"]
        RR4["DELETE /:id/:hotelid - Delete room"]
        RR5["GET / - Get all rooms"]
    end

    subgraph ReservationRoutes["Reservation Routes (/api/reservation)"]
        ResR1["POST /:userId - Create reservation"]
        ResR2["PUT /:id - Update reservation"]
        ResR3["DELETE /:id/:userId - Delete reservation"]
        ResR4["GET /:id - Get single reservation"]
        ResR5["GET / - Get all reservations"]
        ResR6["GET /find/:userId - Get user reservations"]
    end

    subgraph ReviewRoutes["Review Routes (/api/review)"]
        RevR1["POST / - Create review"]
        RevR2["GET /:id - Get reviews by user"]
        RevR3["GET /hotel/:id - Get hotel reviews"]
        RevR4["GET / - Get all reviews"]
    end

    subgraph UserRoutes["User Routes (/api/user)"]
        UR1["PUT /:id - Update user"]
        UR2["DELETE /:id - Delete user"]
        UR3["GET /:id - Get user"]
        UR4["GET / - Get all users"]
    end
```

## 10. City Introduction Pages

```mermaid
graph TD
    Featured["Featured Component (Swiper Carousel)"]

    Featured -->|Click| Hanoi["/hanoi - Hanoi"]
    Featured -->|Click| Dongha["/dongha - Dong Ha"]
    Featured -->|Click| Tucson["/tucson - Tucson"]
    Featured -->|Click| Budapest["/budapest - Budapest"]
    Featured -->|Click| NewYork["/newyork - New York"]
    Featured -->|Click| LA["/la - Los Angeles"]
    Featured -->|Click| Seattle["/seattle - Seattle"]
    Featured -->|Click| Berlin["/berlin - Berlin"]
    Featured -->|Click| London["/london - London"]

    subgraph CityPage["City Introduction Page Structure"]
        CityNavbar[Navbar]
        CityHeader[Header]
        CityContent[City Description + Images]
        CityFooter[Footer]
    end

    Hanoi --> CityPage
    Dongha --> CityPage
    Tucson --> CityPage
    Budapest --> CityPage
    NewYork --> CityPage
    LA --> CityPage
    Seattle --> CityPage
    Berlin --> CityPage
    London --> CityPage
```
