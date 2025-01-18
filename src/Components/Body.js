import React from 'react';
import {Sidebar} from './Sidebar';
import { Outlet } from 'react-router-dom';


export const Body = () => {
return (
    <div className="flex w-full h-full  bg-black">
      <Sidebar />
      <Outlet />
    </div>
  );
}
