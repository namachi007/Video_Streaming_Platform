import React from 'react'

export const Button = ({name}) => {
  return (
    <>
      <button className="font-semibold  bg-whiteTransparent hover:bg-gray-800 px-[10px] py-[5px] rounded-lg text-sm ml-3.5">
        {name}
      </button>
    </>
  );
}
