import React from 'react'
import { Button } from './Button'

export const Buttonslist = () => {
  return (
    <div className="bg-black flex overflow-x-scroll scrollbar-hide pl-2 lg:pl-0 lg:h-10 h-8 ">
      <button className="font-semibold bg-white text-black  whitespace-nowrap flex-shrink-0 lg:h-10 text-[12px] px-[10px] py-[5px] rounded-lg lg:text-sm">
        All
      </button>
      <Button name={"Programming"} />
      <Button name={"Chess strategies"} />
      <Button name={"Java"} />
      <Button name={"Data structures"} />
      <Button name={"Gaming"} />
      <Button name={"Oops"} />
      <Button name={"Leetcode"} />
      <Button name={"Computer programming"} />
      <Button name={"Grandmaster chess title"} />
      <Button name={"Watched"} />
      <Button name={"New to you"} />
    </div>
  );
}
