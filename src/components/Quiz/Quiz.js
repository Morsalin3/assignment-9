import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {options, id, question, correctAnswer} = quiz;
    const handleCorrectAns = () =>{
        
    }
    return (
        <div className='options-section'>
            <h1>Quiz of JavaScript</h1>
            <h3>Quiz : {question}</h3>
            <div className='options-container'>
                <div className='options'>{options[0]}</div>
                <div className='options'>{options[1]}</div>
                <div className='options'>{options[2]}</div>
                <div className='options'>{options[3]}</div>
            </div>
        </div>
    );
};

export default Quiz;