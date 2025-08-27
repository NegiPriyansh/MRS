import { createSlice } from "@reduxjs/toolkit";

const NowPlaying = createSlice({
    name:"Video",
    initialState:[],
    reducers:{
        addVideo:(state,action)=>{
            return action.payload
        }
    }
})

export const {addVideo} = NowPlaying.actions
export default NowPlaying.reducer;