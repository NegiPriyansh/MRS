import { createSlice } from "@reduxjs/toolkit";

const SearchStore = createSlice({
    name:'SearchMovie',
    initialState:[],
    reducers:{
        addMovie:(state,action)=>{
            return action.payload
        }
    }
});

export const {addMovie} = SearchStore.actions;
export default SearchStore.reducer;