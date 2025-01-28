import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { ShimmerHome } from './ShimmerHome';

export const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
  }

  if(videos.length === 0) {
    return  <ShimmerHome />
  }



  return (
    <div className="w-full m-0 p-0 bg-black flex flex-wrap">
      {videos.map((video) => (
        <Link
          key={video.id}
          to={"/watch?v=" + video.id}
          className="lg:w-[31.5%] lg:mr-4 lg:my-4 my-3"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}
