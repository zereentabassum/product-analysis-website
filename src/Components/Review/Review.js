import React from 'react';
import reviewDetails from '../Hook/reviewDetails';

const Review = () => {
    const allReviews = reviewDetails();
    // console.log(allReviews);

  
    // const b = allReviews.map(allReview => allReview);
        // console.log(allReviews[1].map(allReview => allReview));
        
    return (
        <div className='grid grid-cols-4 gap-4'>
            
        
        </div>
    );
};

export default Review;