import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { ShimmerSearch } from "./ShimmerSearch";
import fetchFromApi from "../utils/api";

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
      const json = await fetchFromApi(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}`
      );
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
      <div className="lg:flex lg:flex-row flex flex-col flex space-x-4">
        <img
          className="lg:mr-4 mr-0 w-[500px] rounded-xl"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
        <div className="m-0">
          <h1 className="lg:text-lg font-semibold ">{title}</h1>
          <div className="flex items-center space-x-2 lg:pt-3 pt-2">
            <img
              className="w-8 rounded-full"
              src={channelLogo}
              alt="channelLogo"
            />
            <h2 className="text-sm text-gray-400">{channelTitle}</h2>
          </div>

          <p className="text-sm lg:pt-3 pt-2 text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
