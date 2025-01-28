import React from 'react'

export const Button = ({name}) => {
  return (
    <>
      <button className="font-semibold  whitespace-nowrap flex-shrink-0 lg:h-10 h-8 px-2 bg-whiteTransparent hover:bg-gray-800 lg:px-[10px] lg:py-[5px] py-2 rounded-lg text-[12px] lg:text-sm ml-3.5">
        {name}
      </button>
    </>
  );
}
