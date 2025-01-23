import React from 'react'
import { CommentsSection } from './CommentsSection';

export const CommentContainer = () => {
  return (
    <div className="px-28 mt-10 pb-10 w-[74%]">
      <div>
        <div className="flex items-center ">
          <h1 className="text-2xl font-bold">Comments</h1>
          <button className="text-blue-500 ml-10">Sort by</button>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center py-6 ">
            <img
              src="https://avatars.githubusercontent.com/u/144411164?v=4"
              alt="profile"
              className="w-13    h-12 rounded-full"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full ml-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex  justify-end ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-2xl">
              Comment
            </button>
            <button className="text-blue-500 px-4 rounded-2xl ml-3 hover:bg-slate-900">
              Cancel
            </button>
          </div>
        </div>
        <CommentsSection />
      </div>
    </div>
  );
}
