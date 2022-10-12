import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import Topic from '../Topic/Topic';
import './Topics.css'
import banner from '../../image/banner.png';

const Topics = () => {
    const topics = useLoaderData().data;
    // console.log(topics)
    return (
        <div className='topics-container'>

            <div className='banner'>
            <h4>The Best Learning Institution</h4>
            <h1>Welcome To Our Quiz Game</h1>
            <img src={banner} alt=''></img>

            </div>
            <div className='topics'>
            {
                topics.map(topic=> <Topic 
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
            </div>
            
            


        </div>
    );
};

export default Topics;