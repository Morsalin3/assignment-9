import React from 'react';
import './Option.css'
const Option = ({option, handleCorrectAns, correctAnswer}) => {


    
    return (
        <div>
                <div onClick={()=>handleCorrectAns(option)} className='options'>{option}</div>
                {/* <div className='options'>{second}</div>
                <div className='options'>{third}</div>
                <div className='options'>{four}</div>  */}
        </div>
    );
};

export default Option;