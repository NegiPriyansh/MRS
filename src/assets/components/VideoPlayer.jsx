import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { options } from '../../common/helper'
import AuthCheck from './AuthCheck'

const VideoPlayer = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    async function NoPlaying() {
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        const tral = json.results[0].id;
         const data1 = await fetch(`https://api.themoviedb.org/3/movie/${tral}/videos?language=en-US`,options)
          const json1 = await data1.json();

          const refresh = json1.results.find((vid)=>vid.site==='YouTube'&&vid.type==='Trailer')

          if(refresh){
            setData(refresh.key)
          }
          else{
            console.log("No data found ")
          }

      }
      catch (e) {
        console.log(e)
      }
    }

    NoPlaying();

  }, [])


  return (
    <>
    <AuthCheck/>
    <div className='relative w-full h-[560px]'>
      <iframe
      
  width="560"
  height="315"
  className='pointer-events-none'
 src={`https://www.youtube.com/embed/${data}?autoplay=1&mute=1&controls=0&loop=1&playlist=${data}`}  title="YouTube video player"
   allow="autoplay; encrypted-media "
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
></iframe>


    </div></>
  )
}

export default VideoPlayer
