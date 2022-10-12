import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const statics = useLoaderData().data;
    const {name , total} = statics;
    return (
        <div>
            <h3> 
                this is Statistics:{statics.length}

            </h3>
            <LineChart width={'90%'} height={'300'}>
            <XAxis dataKey={name} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={total} stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default Statistics;