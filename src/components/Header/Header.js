import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Save most of your money</h2>
            <p>By giving me the money</p>
        </div>
    );
};

export default Header;