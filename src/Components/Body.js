import React from 'react'
import {Sidebar} from './Sidebar';
import { MainContainer } from "./MainContainer";


export const Body = () => {
  return (
    <div className="flex w-full h-full  bg-black">
      <Sidebar />
      <MainContainer />
    </div>
  );
}
