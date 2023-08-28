import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./api/routes/auth.js"
import userRoute from "./api/routes/user.js"
import roomRoute from "./api/routes/room.js"
import hotelsRoute from "./api/routes/hotel.js"
import review from "./api/routes/review.js"
import reservationRoute from "./api/routes/reservation.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
dotenv.config();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw (error);
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
})

// Middlewares

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/room", roomRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/reservation", reservationRoute);
app.use("/api/review", review);

app.get("/", (req, res) => {
    res.send("Let's get it!");
})

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running in port ${PORT}`)
});