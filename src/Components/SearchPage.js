import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { closeMenu } from "../utils/menuSlice";
import { useDispatch } from "react-redux";
import { Buttonslist } from "./Buttonslist";
import { SearchList } from "./SearchList";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [videoData, setVideoData] = useState([]);
  

  useEffect(() => {
    if(query) {
      fetchSearchVideos();
      dispatch(closeMenu());
    }
  }, [query]);

  const fetchSearchVideos = async () => {
    try {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=35&q=" +
        searchParams.get("q") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoData(json.items);
  } 
    catch (error) {
    console.error("Error fetching search videos:", error);  
    }
  };
  

  return (
    <div>
      <div className="pl-5">
        <Buttonslist />
      </div>

      <div className="pt-8 pl-5">
        {videoData
          .filter((video) => video.id.kind === "youtube#video")
          .map((video) => (
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
              <SearchList key={video.id.videoId} videoData={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};
