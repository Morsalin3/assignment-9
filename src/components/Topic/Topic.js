import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className='topic'>
            <div className=''>
                <img src={logo} alt=''></img>
                <div>
                    <h2>{name}</h2>
                    <p>Total Quiz: {total}</p>
                </div>
            </div>

            
            <Link to={`/topic/${id}`}>
                
            <button className='quiz-btn'>Start Quiz </button>
            </Link>
           

        </div>
    );
};

export default Topic;