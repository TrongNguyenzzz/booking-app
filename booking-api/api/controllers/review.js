import Review from "../models/review.js";

export const createReview = async(req, res, next) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
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

export const getReviews = async(req, res, next) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        next(err);
    }
};