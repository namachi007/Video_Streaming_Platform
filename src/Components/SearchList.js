import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { ShimmerSearch } from "./ShimmerSearch";

export const SearchList = ({ videoData }) => {
  const [channelLogo, setChannellogo] = useState("");
  const snippet = videoData.snippet || {};
  const { title, channelTitle, channelId, thumbnails, description } = snippet;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (channelId) {
      getChannelLogo();
    }
  }, [channelId]);

  const getChannelLogo = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      if (json?.items && json.items.length > 0) {
        setChannellogo(json.items[0].snippet?.thumbnails?.default?.url || "");
      } else {
        console.error("No items found in the response");
      }
    } catch (error) {
      console.error("Failed to fetch channel logo:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <ShimmerSearch />
      </div>
    );
  }

  return (
    <div className="pb-4 cursor-pointer">
      <div className="flex space-x-4">
        <img
          className=" w-[500px] rounded-xl"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className="flex items-center space-x-2 pt-3">
            <img
              className="w-8 rounded-full"
              src={channelLogo}
              alt="channelLogo"
            />
            <h2 className="text-sm text-gray-400">{channelTitle}</h2>
          </div>

          <p className="text-sm pt-3 text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
