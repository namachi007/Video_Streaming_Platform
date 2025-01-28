import React from 'react'
import { CommentsSection } from './CommentsSection';

export const CommentContainer = () => {



  
  return (
    <div className=" lg:ml-24 px-3 mt-10 pb-10  lg:w-[59%] lg:px-28">
      <div>
        <div className="flex items-center ">
          <h1 className="lg:text-2xl text-lg font-bold">Comments</h1>
          <button className="text-blue-500 ml-10">Sort by</button>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex items-center py-6 w-full">
            <img
              src="https://avatars.githubusercontent.com/u/144411164?v=4"
              alt="profile"
              className="lg:w-13 lg:h-10 w-10  rounded-full"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full ml-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex  justify-end ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white lg:px-3 lg:py-2 px-2 py-1 rounded-2xl lg:text-md text-sm">
              Comment
            </button>
            <button className="text-blue-500 lg:px-4 px-3 rounded-2xl ml-3 hover:bg-slate-900 lg:text-md text-sm">
              Cancel
            </button>
          </div>
        </div>
        <CommentsSection />
      </div>
    </div>
  );
}
