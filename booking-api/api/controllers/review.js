import Review from "../models/review.js";
import Hotel from "../models/hotel.js";

const updateHotelAverageRating = async(hotelid) => {
    const reviews = await Review.find({ hotelid });
    if (reviews.length === 0) return;
    const sum = reviews.reduce((acc, r) => acc + r.rate, 0);
    const avg = Math.round((sum / reviews.length) * 10) / 10;
    await Hotel.findByIdAndUpdate(hotelid, { rating: avg });
};

export const createReview = async(req, res, next) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
        await updateHotelAverageRating(req.body.hotelid);
        res.status(200).json(savedReview);
    } catch (err) {
        next(err);
    }
};

export const getReview = async(req, res, next) => {
    try {
        const reviews = await Review.find({ userid: req.params.id });
        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
};

export const getHotelReview = async(req, res, next) => {
    try {
        const reviews = await Review.find({ hotelid: req.params.id });
        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
};

export const getHotelAverageRating = async(req, res, next) => {
    try {
        const reviews = await Review.find({ hotelid: req.params.id });
        if (reviews.length === 0) {
            return res.status(200).json({ average: 0, count: 0 });
        }
        const sum = reviews.reduce((acc, r) => acc + r.rate, 0);
        const avg = Math.round((sum / reviews.length) * 10) / 10;
        res.status(200).json({ average: avg, count: reviews.length });
    } catch (err) {
        next(err);
    }
};

export const getReviews = async(req, res, next) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
};