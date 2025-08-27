import React from 'react'
import { useSelector } from 'react-redux'
import { ImageUrl } from '../../common/helper'

const Result = () => {

    const select = useSelector((Store)=>Store?.SearchMovie)

    
  return (
    <div>
        {
            select&&select.map((data,index)=>(
                
                <div className='text-white' key={index}>
                    <img src={ImageUrl+data.poster_path} alt="" />
                    
                </div>
            ))
        }
    </div>
  )
}

export default Result