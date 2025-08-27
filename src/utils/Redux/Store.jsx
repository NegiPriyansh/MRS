import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import SearchStore from './SearchStore'
import NowPlaying from './NowPlaying'
import UserSlice from './UserSlice'

const Store = configureStore({
    reducer:{
        SearchMovie:SearchStore,
        Video:NowPlaying,
        user:UserSlice
    }
})

export default Store