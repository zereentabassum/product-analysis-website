import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <nav className='navbar'>
               <Link className='navBar' to="/home">Home</Link>
               <Link className='navBar' to="/reviews">Reviews</Link>
               <Link className='navBar' to="/dashboard">Dashboard</Link>
               <Link className='navBar' to="/blogs">Blogs</Link>
               <Link className='navBar' to="/about">About</Link>
            </nav>
      
    );
};

export default Header;