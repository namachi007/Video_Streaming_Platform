import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWatchPage } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import { CommentContainer } from "./CommentContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setWatchPage(true));

    return () => {
      dispatch(setWatchPage(false));
    };
  }, [dispatch]);

  return (
    <div className="lg:px-28">
      <div className="flex flex-col lg:flex-row">
        {/* Video Container */}
        <div className="w-full lg:w-[910px]">
          <div className="relative w-full aspect-w-16 aspect-h-9 lg:rounded-2xl overflow-hidden">
            <iframe
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              className="absolute top-0 left-0 w-full h-full"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Live Chat */}
        <div className="hidden lg:block w-96 ml-10 h-[500px]">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section */}
      <CommentContainer />
    </div>
  );
};
