import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics)
    return (
        <div>
            <h3>this is topics: {topics.length}</h3>
            {
                topics.map(topic=> <Topic 
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;