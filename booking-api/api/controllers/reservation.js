import Reservation from "../models/reservation.js";
import User from "../models/user.js";
import Room from "../models/room.js";

export const createReservation = async(req, res, next) => {
    const userId = req.params.userId;
    const newReservation = new Reservation(req.body);

    try {
        const savedReservation = await newReservation.save();
        await User.findByIdAndUpdate(userId, {
            $push: { reservations: savedReservation._id },
        });
        res.status(200).json(savedReservation);
    } catch (err) {
        next(err);
    }
};

export const updateReservation = async(req, res, next) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        )
        res.status(200).json(updatedReservation);
    } catch (err) {
        next(err);
    }
};

export const deleteReservation = async(req, res, next) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, {
            $pull: { reservations: req.params.id }
        })
        const reservation = await Reservation.findById(req.params.id);
        const listDate = reservation.dates;
        const roomId = reservation.room;

        await Reservation.findByIdAndDelete(req.params.id);

        for (let day in listDate) {
            await Room.updateOne({ "roomNumbers._id": roomId }, {
                $pull: { "roomNumbers.$.unavailableDates": listDate[day] }
            })
        }
        res.status(200).json("Delete the reservation successfully!");
    } catch (err) {
        next(err);
    }
};

export const getReservation = async(req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        res.status(200).json(reservation);
    } catch (err) {
        next(err);
    }
};

export const getReservations = async(req, res, next) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        next(err);
    }
};

export const getUserReservation = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        const list = await Promise.all(
            user.reservations.map((reservation) => {
                return Reservation.findById(reservation);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}