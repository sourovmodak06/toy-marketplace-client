import React from 'react';
import logo from '/images/icon.png'

const Logo = () => {
    return (
        <div className='flex items-center'>
            <h2 className='text-sm md:text-2xl font-black'>SuperHero</h2>
            <img src={logo} alt="logo" className="w-5 md:w-8" />
            <h2 className='text-sm md:text-2xl font-black'>ToyStore</h2>
        </div>
    );
};

export default Logo;