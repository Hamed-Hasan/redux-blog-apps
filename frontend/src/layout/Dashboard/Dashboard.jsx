import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 p-3 gap-3 '>
        <SideBar/>
        <div className='col-span-10 w-full  rounded-lg'>
          <Outlet />
        </div>
      </div>
    );
};

export default Dashboard;