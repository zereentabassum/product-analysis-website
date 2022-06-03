import React from 'react';
import './ReviewSec.css';

const ReviewSec = ({ review }) => {
    const {name, img, body, rating} = review;
    return (
        <div className='all-reviews'>
            <div className='user-img'>
                <img src={img} alt="" />
                <h4 className='name'>{name}</h4>
            </div>

            <div className='details'>
            <h3><span style={{color: 'gray'}}>Rating:</span> {rating} Star</h3>
            <h4>{body}</h4>
            </div>
            
        </div>
    );
};

export default ReviewSec;