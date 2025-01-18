import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

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

  return (
    <div className="w-full m-0 p-0 bg-black flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} className="w-[31.5%] mr-4 my-4">
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}
