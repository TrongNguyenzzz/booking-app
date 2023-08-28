import express from "express";
import {
    createReservation,
    updateReservation,
    deleteReservation,
    getReservation,
    getReservations,
    getUserReservation
} from "../controllers/reservation.js";

const router = express.Router();

//CREATE
router.post("/:userId", createReservation);

//UPDATE
router.put("/:id", updateReservation);

// DELETE
router.delete("/:id/:userId", deleteReservation);

// GET
router.get("/:id", getReservation);

// GET ALL
router.get("/", getReservations);
router.get("/find/:userId", getUserReservation);

export default router;