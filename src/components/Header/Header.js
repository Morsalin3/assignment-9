import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Quiz Game</h2>
            <nav className='header'>
                <NavLink className='menu' to="/">Topics</NavLink>
                <NavLink className='menu' to="/statistics">Statistics</NavLink>
                <NavLink className='menu' to="/blog">Blog</NavLink>

               
            </nav>
        </div>
    );
};

export default Header;