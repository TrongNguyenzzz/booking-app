import { Decimal128, Double, Long } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: true,
    },
    rate: {
        type: Number,
        min: 0,
        max: 10,
    },
    comment: {
        type: String,
    },
    hotelid: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    }
}, { timestamps: true })

export default mongoose.model("Review", UserSchema)