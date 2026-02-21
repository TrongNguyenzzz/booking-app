import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./starRating.css";

const StarRating = ({ rating, onRate, maxStars = 10, size = 20, interactive = false }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const displayRating = hoverRating || rating || 0;

    return (
        <div className="starRating">
            {[...Array(maxStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        className={interactive ? "starInteractive" : "starStatic"}
                        onClick={() => interactive && onRate && onRate(starValue)}
                        onMouseEnter={() => interactive && setHoverRating(starValue)}
                        onMouseLeave={() => interactive && setHoverRating(0)}
                        style={{ fontSize: size }}
                    >
                        {starValue <= displayRating ? (
                            <AiFillStar className="starFilled" />
                        ) : (
                            <AiOutlineStar className="starEmpty" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
