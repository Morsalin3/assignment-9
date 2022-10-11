import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Quiz Crackers</h2>
            <nav className='header'>
                <a href="/">Topics</a>
                <a href="/statistics">Statistics</a>
                <a href="/blog">Blog</a>

                {/* <Link to={'/topics'}>Topics</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blog'}>Blog</Link> */}
            </nav>
        </div>
    );
};

export default Header;