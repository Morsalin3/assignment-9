import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Quiz Crackers</h2>
            <nav className='header'>
                <Link to="/">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>

                {/* <Link to={'/topics'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link> */}
            </nav>
        </div>
    );
};

export default Header;