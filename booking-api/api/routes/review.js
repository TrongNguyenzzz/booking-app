import express from "express";
import { createReview, getReview, getReviews, getHotelReview, getHotelAverageRating } from "../controllers/review.js";

const router = express.Router();

//CREATE
router.post("/", createReview);

//UPDATE
// router.put("/:id", updateUser);

//DELETE
// router.delete("/:id", deleteUser);

//GET
router.get("/:id", getReview);
router.get("/hotel/:id", getHotelReview);
router.get("/hotel/:id/average", getHotelAverageRating);

//GET ALL
router.get("/", getReviews);

export default router;