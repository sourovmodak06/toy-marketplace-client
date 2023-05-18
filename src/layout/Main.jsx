import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';

const Main = () => {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;