import React, { useState } from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import Option from '../Options/Option';


const Quiz = ({quiz}) => {
    const {options, id, question, correctAnswer} = quiz;

    const correctAns = (ans) => {
        toast(ans);
    }

    const handleCorrectAns = ans => {
        // const correctAns = options.find( a => a === ans)
        console.log(ans);

        if(correctAnswer === ans){
            toast.success("Wow, Your anwser is Right!", {
                position: "top-center"
            });       
        }

        else{
            toast.warn("Wow, Your anwser is wrong!", {
                position: "top-center"
            });
        }
     }

    return (
        <div className='options-section'>
            <span onClick={()=>correctAns(`${correctAnswer}`)}><EyeIcon className="fontIcon"/></span>
            <ToastContainer/>
            <h3>Quiz : {question}</h3>
            <div className='options-container'>

                {
                    options.map((option, idx) => <Option 
                    option={option}
                    key={idx}
                    handleCorrectAns={handleCorrectAns}
                    correctAnswer={correctAnswer}
                    ></Option> )
                }
               
            </div>
        </div>
    );
};

export default Quiz;