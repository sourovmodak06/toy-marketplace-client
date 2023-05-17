import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;