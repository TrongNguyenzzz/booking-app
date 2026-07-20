import express from "express";
import {
    addToWishlist,
    removeFromWishlist,
    getUserWishlist,
    checkWishlistItem,
} from "../controllers/wishlist.js";

const router = express.Router();

// Add hotel to wishlist
router.post("/:userId", addToWishlist);

// Remove hotel from wishlist
router.delete("/:userId/:hotelId", removeFromWishlist);

// Get all wishlist items for a user
router.get("/:userId", getUserWishlist);

// Check if a hotel is in user's wishlist
router.get("/:userId/:hotelId", checkWishlistItem);

export default router;
