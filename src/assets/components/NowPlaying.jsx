import React, { useEffect, useState } from 'react'
import { options } from '../../common/helper'
import { ImageUrl } from '../../common/helper'
import AuthCheck from './AuthCheck'

const NowPlaying = () => {

    const [now,setData] = useState([])
    useEffect(()=>{
        async function NoPlaying(){
            try{
                const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options);
                const json = await data.json();
                setData(json.results)
                
            }
            catch(e){
                console.log(e)
            }
        }

        NoPlaying();
        
},[])

  return (
    <>
    <AuthCheck/>
    <div className='flex justify-center'>
    <div className='grid grid-cols-3 gap-x-30 gap-y-10 m-auto'>{
    now.map((data)=>(
        <div >
            <img className='w-[400px] h-[550px] ' src={ImageUrl+data?.poster_path} alt="" />
        </div>
    ))}
    </div></div>
    </>
  )
}

export default NowPlaying