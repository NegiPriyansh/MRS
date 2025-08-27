import React from 'react'
import NewBody from './NewBody'
import { createBrowserRouter, Router } from 'react-router'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router'
import NowPlaying from './NowPlaying'
import VideoPlayer from './VideoPlayer'
import AisearchContainer from './AisearchContainer'


const Body = () => {

    const route = createBrowserRouter([
        {
            path:'/',
            element:<NewBody/>,
            children:[
                {
                    path:'/',
                    element:<Login/>,
                },
                {
                    path:'/browse',
                    element:<Browse/>
                },
                {
                    path:'/now',
                    element:<NowPlaying/>
                },
                {
                    path:'/video',
                    element:<VideoPlayer/>
                },
                {
                    path:'/AiSearch',
                    element:<AisearchContainer/>
                }
            ]
        }
    ])
  return (
    <>
    <RouterProvider router={route}/>
 
    </>
  )
}

export default Body