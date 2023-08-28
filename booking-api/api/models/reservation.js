import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    dates: {
        type: [Date],
        required: true,
    },
    hotel: {
        type: String,
        require: true
    },
    room: {
        type: String,
        required: true,
    },
    hotelName: {
        type: String,
        require: true
    },
    roomNumber: {
        type: Number,
        require: true
    },
    hotelPhoto: {
        type: String,
        require: true
    },
    total: {
        type: Number,
        require: true
    }
}, { timestamps: true });

export default mongoose.model("Reservation", ReservationSchema);