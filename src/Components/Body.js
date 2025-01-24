import React from 'react';
import {Sidebar} from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Body = () => {


const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
const isWatchPage = useSelector((state) => state.menu.isWatchPage);

return (
  <div className="flex w-full h-full  bg-black">
     <Sidebar />
    {/* <Sidebar /> */}
    <Outlet />
  </div>
);
}
