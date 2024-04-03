import { createSlice } from "@reduxjs/toolkit";

export const cartCounterSlice = createSlice({
    name: 'cartCounter',
    initialState:0,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
       return state += 1
      },
      decrement: (state) => {
        return state -= 1
      },
      
      clearCart: (state)=>{
        return 0;
      }
    },
  })

  export const {increment, decrement, clearCart}=cartCounterSlice.actions;
  export default cartCounterSlice.reducer;