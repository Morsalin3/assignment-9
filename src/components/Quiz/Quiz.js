import React, { useState } from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';


const Quiz = ({quiz}) => {
    const {options, id, question, correctAnswer} = quiz;

    const correctAns = (ans) => {
        toast(ans);
    }

    const handleCorrectAns = ans => {

     }
    return (
        <div className='options-section'>
            <span onClick={()=>correctAns(`${correctAnswer}`)}><EyeIcon className="fontIcon"/></span>
            <ToastContainer/>
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