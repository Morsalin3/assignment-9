import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './TopicDetails.css'

const TopicDetails = () => {
    const quizes = useLoaderData().data.questions;

    console.log(quizes)
    return (
        <div className='quiz-container'>

            {
                quizes.map(quiz =><Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;