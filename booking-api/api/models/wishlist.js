import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    hotelId: {
        type: String,
        required: true,
    },
    hotelName: {
        type: String,
        required: true,
    },
    hotelPhoto: {
        type: String,
    },
    hotelCity: {
        type: String,
    },
    hotelPrice: {
        type: Number,
    },
    hotelRating: {
        type: Number,
    },
}, { timestamps: true });

// Ensure a user can only save a hotel once
WishlistSchema.index({ userId: 1, hotelId: 1 }, { unique: true });

export default mongoose.model("Wishlist", WishlistSchema);
