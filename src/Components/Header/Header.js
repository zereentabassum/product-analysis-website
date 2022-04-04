import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar text-2xl space-x-9 py-4 mb-6 bg-orange-200'>
               <a href="/home">HOME</a>
               <a href="/reviews">REVIEWS</a>
               <a href="/dashboard">DASHBOARD</a>
               <a href="/blogs">BLOGS</a>
               <a href="/about">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;