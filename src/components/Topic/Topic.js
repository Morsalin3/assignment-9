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

            <button className='quiz-btn'> 
            <Link to={`/topic/${id}`}>Start Quiz</Link>
            </button>

        </div>
    );
};

export default Topic;