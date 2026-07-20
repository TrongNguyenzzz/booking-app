import Wishlist from "../models/wishlist.js";

export const addToWishlist = async (req, res, next) => {
    const userId = req.params.userId;
    const { hotelId, hotelName, hotelPhoto, hotelCity, hotelPrice, hotelRating } = req.body;

    if (!hotelId || !hotelName) {
        return res.status(400).json({ message: "hotelId and hotelName are required." });
    }

    try {
        const existing = await Wishlist.findOne({ userId, hotelId });
        if (existing) {
            return res.status(409).json({ message: "Hotel is already in wishlist." });
        }

        const newWishlistItem = new Wishlist({
            userId,
            hotelId,
            hotelName,
            hotelPhoto,
            hotelCity,
            hotelPrice,
            hotelRating,
        });

        const savedItem = await newWishlistItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        next(err);
    }
};

export const removeFromWishlist = async (req, res, next) => {
    const userId = req.params.userId;
    const hotelId = req.params.hotelId;

    try {
        const item = await Wishlist.findOneAndDelete({ userId, hotelId });
        if (!item) {
            return res.status(404).json({ message: "Wishlist item not found." });
        }
        res.status(200).json({ message: "Hotel removed from wishlist." });
    } catch (err) {
        next(err);
    }
};

export const getUserWishlist = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const wishlist = await Wishlist.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(wishlist);
    } catch (err) {
        next(err);
    }
};

export const checkWishlistItem = async (req, res, next) => {
    const userId = req.params.userId;
    const hotelId = req.params.hotelId;

    try {
        const item = await Wishlist.findOne({ userId, hotelId });
        res.status(200).json({ isInWishlist: !!item });
    } catch (err) {
        next(err);
    }
};
