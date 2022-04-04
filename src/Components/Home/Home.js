
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='flex'>
            <div className='mt-8 pt-6'> 
                <h1 className='text-8xl text-emerald-500 pb-8'>Clear Pixel Camera</h1>
                <p text-2xl>This is about the best digital cameras from top brands. We will allow you to analysis the top branded digital cameras.</p>
            </div>
            <div className=''>
                <img src="https://www.pngmart.com/files/6/DSLR-Camera-Transparent-Background.png" alt="" />
            </div>
        </div>
    );
};

export default Home;