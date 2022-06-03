import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar text-2xl space-x-9 py-4 mb-6 bg-orange-200'>
               <Link className='navBar' to="/home">Home</Link>
               <Link className='navBar' to="/reviews">Reviews</Link>
               <Link className='navBar' to="/dashboard">Dashboard</Link>
               <Link className='navBar' to="/blogs">Blogs</Link>
               <Link className='navBar' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;