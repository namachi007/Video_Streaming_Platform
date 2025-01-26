import React from "react";

export const ShimmerDiv = () => {
  return (
    <div className="flex space-x-3 flex-wrap flex-col py-4">
      <div className="w-[30%] h-64 bg-gray-500 rounded-xl animate-pulse"></div>
      <div className="flex">
        <div className="bg-gray-500 rounded-full h-8 w-10 mt-3 mr-2"></div>
        <div className="flex flex-col">
          <div className="h-4 w-80 mt-3 bg-gray-500 rounded-xl"></div>
          <div className="h-4 w-80 my-3 bg-gray-500 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
