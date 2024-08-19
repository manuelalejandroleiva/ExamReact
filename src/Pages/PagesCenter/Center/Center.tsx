import React from 'react'
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';


function Center() {

  const games = useAppSelector((state: RootState) => state.ImgeSlice);
  return (

    <div>
      <img src={games.image ? games.image : `/asset/imagesrc.jpeg`} style={{
        maxWidth: '100%',
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      }} />
    </div>


  )
}

export default Center