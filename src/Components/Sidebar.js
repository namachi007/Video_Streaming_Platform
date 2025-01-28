import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Sidebar = () => {

   const isMenuopen = useSelector((store) => store.menu.isMenuOpen);
   const isWatchPage = useSelector((store) => store.menu.isWatchPage);

   if( isWatchPage ) {
     return null;
   }

   if( !isMenuopen ) {
    return (
      <div className="w-[7%] h-[100%] px-1 hidden lg:block">
        <div className=" h-[100%]  px-3">
          <ul>
            <Link to="/">
              <li className="py-1 mr-1 my-2 text-[10px] cursor-pointer flex flex-col  justify-center items-center space- hover:bg-gray-800 p-1 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="22"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>

                <span>Home</span>
              </li>
            </Link>
            <li className="py-1 mr-1 my-2  text-[10px] cursor-pointer flex flex-col  justify-center items-center space- hover:bg-gray-800 p-1 rounded-xl">
              <img
                src="/shorts_icon.ico"
                alt="Shortsicon"
                className=""
                width="18"
                height="20"
              />
              <span>Shorts</span>
            </li>
            <li className="py-1 mr-1 my-2  text-[10px] cursor-pointer flex flex-col  justify-center items-center space- hover:bg-gray-800 p-1 rounded-xl">
              <img
                src="/subscriptions_icon.ico"
                alt="Shortsicon"
                className=""
                width="18"
                height="20"
              />
              <span>Subscriptions</span>
            </li>
          </ul>
        </div>
      </div>
    );
   }

   
  return (
    <div className=" w-[14%] px-3 h-[100%] hidden lg:block">
      <div className=" h-[100%]  px-3">
        <ul className="py-">
          <Link to="/">
            <li className="py-1 font-semibold cursor-pointer flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>
              <span>Home</span>
            </li>
          </Link>
          <li className="py-1 font-semibold cursor-pointer flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-xl">
            <img
              src="/shorts_icon.ico"
              alt="Shortsicon"
              className=""
              width="18"
              height="20"
            />
            <span>Shorts</span>
          </li>
          <li className="py-1 font-semibold cursor-pointer flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-xl">
            <img
              src="/subscriptions_icon.ico"
              alt="Shortsicon"
              className=""
              width="18"
              height="20"
            />
            <span>Subscriptions</span>
          </li>
          <li className="py-1">
            <hr className=""></hr>
          </li>
          <li className="py-2 font-semibold">
            <h2>You-{">"}</h2>
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            History
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            Playlists
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4 ">
            Your videos
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4 ">
            Watch later
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4 ">
            Liked videos
          </li>
          <li className="py-1">
            <hr></hr>
          </li>
          <li className="py-2 font-semibold">Subscriptions</li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            Music
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            Sports
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            Gaming
          </li>
          <li className="py-1 ml-1 cursor-pointer hover:bg-gray-800 rounded-lg p-4">
            Movies
          </li>
        </ul>
      </div>
    </div>
  );
}
