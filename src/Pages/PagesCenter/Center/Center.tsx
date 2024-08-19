import React from 'react'
import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/hooks';


function Center() {

  const games = useAppSelector((state: RootState) => state.ImgeSlice);
  return (

     <div>
      
      <img src={games.image? games.image :`/asset/imagesrc.jpeg`} style={{width:'650px',height:'450px'}}/>
     </div>

      
    
  )
}

export default Center