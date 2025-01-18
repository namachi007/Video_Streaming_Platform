import React from 'react'
import { Buttonslist } from './Buttonslist'
import { VideoContainer } from './VideoContainer'

export const MainContainer = () => {
  return (
    <div className="bg-black">
      <Buttonslist />
      <VideoContainer />
    </div>
  );
}
