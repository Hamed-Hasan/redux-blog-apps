import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
const Main = () => {
    return (
        <div className='bg-[#0B1120] h-full'>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Main;