import React, { useEffect, useState } from 'react'
import Image from "react-image";
import { GOOGLE_API_KEY } from '../utils/constants'; 

export const VideoCard = ({info}) => {
    // console.log(info);
    const[channelLogo, setChannellogo] = useState("");

  
  useEffect(() => {
     if (info) {
       getChannelLogo();
     }
  },[info])

  const getChannelLogo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // console.log(json);
    setChannellogo(json?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  if (!info) {
    return null;
  }
   const { snippet, statistics } = info;

   const { title, channelTitle, thumbnails, channelId, publishedAt } = snippet;
   const { maxres, high} = thumbnails;

   const formatViewCount = (viewCount) => {
     const num = parseInt(viewCount, 10);
     if (num >= 1_000_000) {
       return (num / 1_000_000).toFixed(1) + "M"; 
     } else if (num >= 1_000) {
       return (num / 1_000).toFixed(1) + "K"; 
     }
     return num.toString(); 
   };

   const getRelativeTime = (publishedAt) => {
     const publishedDate = new Date(publishedAt);
     const currentDate = new Date();

     const diffInMonths =
       (currentDate.getFullYear() - publishedDate.getFullYear()) * 12 +
       (currentDate.getMonth() - publishedDate.getMonth());

     if (diffInMonths < 1) return "Less than a month ago";
     if (diffInMonths === 1) return "1 month ago";
     return `${diffInMonths} months ago`;
   };

   const relativeTime = getRelativeTime(publishedAt);


   const formattedViewCount = formatViewCount(statistics?.viewCount);

  

  return (
    <div className="my-4 mr-4 w-[100%] ">
      <div className="">
        <div className=" rounded-lg h-auto ">
          <img
            src={maxres?.url || high?.url}
            alt="video_thumbnail"
            className="rounded-lg w-[415px] h-[240px] "
          />
        </div>
        <div className="flex pt-2">
          <div className="pl-2  ">
            <img
              src={channelLogo}
              alt="channel_logo"
              className=" rounded-full w-16 h-11"
              
            />
          </div>
          <div className="pl-3">
            <ul>
              <li className="font-semibold">{title}</li>
              <li className="text-sm pt-1 text-gray-400">{channelTitle}</li>
              <li className="text-sm  text-gray-400">
                {formattedViewCount} views ~ {relativeTime}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
