import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./review.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRating from "../starRating/StarRating";


const Review = ({hotelid}) => {

    const { data, reFetch } =  useFetch(`http://localhost:5050/api/review/hotel/${hotelid}`);

    const { user } = useContext(AuthContext);

    const [openReview, setOpenReview] = useState(false);

    const [currRate, setCurrRate] = useState(0);

    const [currComment, setCurrComment] = useState("");

    const averageRating = data.length > 0
        ? Math.round((data.reduce((sum, r) => sum + r.rate, 0) / data.length) * 10) / 10
        : 0;

    const notification = () => toast.success("Review submitted successfully!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const fail = () => toast.error("The content of review is not valid!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    

    const handleReview = async () => {
        if (currRate === 0) {
            fail();
        } else {
            try {
                await axios.post("http://localhost:5050/api/review", {userid: user.details._id, rate: currRate, 
                comment: currComment, hotelid: hotelid, username: user.details.username});
                setOpenReview(false);
                setCurrRate(0);
                setCurrComment("");
                reFetch();
                notification();
            } catch(err) {
                fail();
            }
        }
    }

    return(
        <div>
            <div className="reviewHeader">
                <h1> Reviews </h1>
                {data.length > 0 && (
                    <div className="averageRatingDisplay">
                        <span className="averageRatingLabel">Average Rating:</span>
                        <StarRating rating={Math.round(averageRating)} maxStars={10} size={18} />
                        <span className="averageRatingValue">{averageRating}/10</span>
                        <span className="reviewCount">({data.length} {data.length === 1 ? 'review' : 'reviews'})</span>
                    </div>
                )}
            </div>
            {data.length > 0 && (
                <div>
                    {data.map((review, index) => <div className="review" key={index}>
                        <ReviewCard
                            user={review.username}
                            rate={review.rate}
                            comment={review.comment}
                        >
                        </ReviewCard>
                    </div>)}
                </div>
                )
            }
            {data.length === 0 && <p className="noReviews">No reviews yet. Be the first to leave a review!</p>}
            {user && <Button className="addReview" onClick={() => setOpenReview(true)}> + Add your review</Button>}
            {openReview && <div className="review-add">
                    <div className="ratingInput">
                        <span className="ratingInputLabel">Your Rating:</span>
                        <StarRating rating={currRate} onRate={setCurrRate} maxStars={10} size={24} interactive={true} />
                        {currRate > 0 && <span className="ratingInputValue">{currRate}/10</span>}
                    </div>
                    <input onChange={(e) => setCurrComment(e.target.value)} value={currComment} className="input-review" type="text" placeholder="Enter your comment here"></input>
                    <Button className="addReview" onClick={handleReview}> Post </Button>
                </div>}
                <ToastContainer />
        </div>
    )
}

export default Review;
