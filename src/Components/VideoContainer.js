import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { ShimmerHome } from './ShimmerHome';
import fetchFromApi from "../utils/api";


export const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async() => {
    const json = await fetchFromApi(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN`
    );
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
          className="lg:w-[31.5%] lg:mr-6 lg:my-4 my-3"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}
