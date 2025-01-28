import React from "react";
import { Buttonslist } from "./Buttonslist";
import { VideoContainer } from "./VideoContainer";

export const MainContainer = () => {
  return (
    <div className="bg-black lg:w-[86%] w-[100%] m-0 p-0 h">
      <Buttonslist />
      <VideoContainer />
    </div>
  );
};
