import React from 'react'
import {Sidebar} from './Sidebar';
import { MainContainer } from "./MainContainer";


export const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}
