
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../Hook/useReviews';
import './Home.css';
import ReviewSec from './ReviewSec';

const Home = () => {
    const [allReviews, setAllReviews] = useReviews();
    const reviews = allReviews.slice(0, 3);

    const navigate = useNavigate();

    const showMore = ()=>{
        navigate('/reviews')
    }
    
    return (
        <div>
        <div  className='flex container first-section'>
            <div className=' mt-8 pt-6 ml-5'> 
                <h1 className='heading text-8xl text-emerald-500 pb-8'>Clear Pixel Camera</h1>
                <p className='pl-2 font-semibold'>This is about the best digital cameras from top brands. We will allow you to analysis the top branded digital cameras.</p>
            </div>
            <div className=''>
                <img src="https://www.pngmart.com/files/6/DSLR-Camera-Transparent-Background.png" alt="" />
            </div>
        </div>

        <div className='reviewSection pt-8 mt-6 '>
            <h1 className='text-emerald-600 text-5xl pb-8'>Customer Reviews</h1>
            <div >
                <div className='reviews'>
                    {
                        reviews.map(review=> <ReviewSec key={review.id} review={review}></ReviewSec>)
                    }

                </div>
                <button onClick={showMore} className='show-more'>Show More</button>

               
             <p></p>
             <p></p>
            </div>
        </div>
        </div>
    );
};

export default Home;