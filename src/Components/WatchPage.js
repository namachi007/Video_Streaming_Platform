import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, closeWatchPage, setWatchPage } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';
import { CommentContainer } from './CommentContainer';
import { LiveChat } from './LiveChat';

export const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);


    useEffect(() => {
      dispatch(setWatchPage(true));
        // dispatch(closeMenu());

        return () => {
          dispatch(setWatchPage(false));
        }
        
    },[dispatch])

  return (
    <div>
      <div className="px-28 flex">
        <div>
          <iframe
            width="910"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            className="rounded-2xl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-96 ml-10 h-[500px]'>
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
}
