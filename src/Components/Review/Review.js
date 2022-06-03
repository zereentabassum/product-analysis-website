import React from 'react';
import ReviewSec from '../Home/ReviewSec';
import reviewDetails from '../Hook/reviewDetails';
import useReviews from '../Hook/useReviews';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReviews();
  
    return (
        <div className='review-page'>
            <h1>All Reviews</h1>
             <div className='reviews'>
                    {
                        reviews.map(review=> <ReviewSec key={review.id} review={review}></ReviewSec>)
                    }

                </div>
        
        </div>
    );
};

export default Review;