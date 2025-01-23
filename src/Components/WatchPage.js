import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, closeWatchPage, setWatchPage } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';

export const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    
    

    useEffect(() => {
      dispatch(setWatchPage(true));
        // dispatch(closeMenu());

        return () => {
          dispatch(setWatchPage(false));
        }
        
    },[dispatch])

  return (
    <div>
      <iframe
        width="880"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        className="rounded-lg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
