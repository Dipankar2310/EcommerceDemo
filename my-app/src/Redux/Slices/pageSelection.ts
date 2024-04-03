import { createSlice } from "@reduxjs/toolkit";

export const pageSelectionSlice = createSlice({
    name: 'pageSelection',
    initialState:{
      page:"Tops"
    },
    reducers: {
      changePage: (state,action) => {
       return {...state, page:action.payload};
      },
  }});

  export const {changePage}=pageSelectionSlice.actions;
  export default pageSelectionSlice.reducer;