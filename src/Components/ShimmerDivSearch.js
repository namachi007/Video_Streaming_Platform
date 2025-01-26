import React from "react";

export const ShimmerDivSearch = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex mb-4">
        <div>
          <div className="w-[500px] rounded-xl h-[280px] bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex flex-col w-full ml-3">
          <div className="h-4 w-full mt-3 bg-gray-300 rounded-xl animate-pulse"></div>
          <div className="h-4 w-32 my-3 bg-gray-300 rounded-xl animate-pulse"></div>
          <div className="flex items-center space-x-1">
            <div className="bg-gray-500 rounded-full h-8 w-10 mt-3 mr-2"></div>
            <div className="bg-gray-300 h-3 w-20 rounded-xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
