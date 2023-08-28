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


const Review = ({hotelid}) => {

    const { data, reFetch } =  useFetch(`http://localhost:5050/api/review/hotel/${hotelid}`);

    const { user } = useContext(AuthContext);

    const [openReview, setOpenReview] = useState(false);

    const [currRate, setCurrRate] = useState(0);

    const [currComment, setCurrComment] = useState("");

    const notification = () => toast.success("Reserve successfully!",  {
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

    const handleReview = () => {
        if (currRate == 0) {
            fail();
        } else {
            try {
                axios.post("http://localhost:5050/api/review", {userid: user.details._id, rate: currRate, 
                comment: currComment, hotelid: hotelid, username: user.details.username});
                setOpenReview(false);
                notification();
            } catch(err) {
                fail();
            }
        }
    }

    return(
        <div>
            <h1> Reviews </h1>
            {data.length > 0 && (
                <div>
                    {data.map((review) => <div className="review">
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
            {user && <Button className="addReview" onClick={() => setOpenReview(true)}> + Add your review</Button>}
            {openReview && <div className="review-add">
                    <input onChange={(e) => setCurrRate(e.target.value)} className="input-review1" type="text" placeholder="Rate: "></input>
                    <input onChange={(e) => setCurrComment(e.target.value)} className="input-review" type="text" placeholder="Enter your comment here"></input>
                    <Button className="addReview" onClick={handleReview}> Post </Button>
                </div>}
                <ToastContainer />
        </div>
    )
}

export default Review;