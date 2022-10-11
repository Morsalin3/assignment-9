import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.css'

const main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default main;