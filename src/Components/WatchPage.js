import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/menuSlice';

export const WatchPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    },[])

  return (
    <div>WatchPage</div>
  )
}
