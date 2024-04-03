import { configureStore } from "@reduxjs/toolkit";
import  cartCounterSlice  from "./Slices/cartCounter";
import pageSelection from "./Slices/pageSelection";
export const store = configureStore({
reducer:{
    cartCounter:cartCounterSlice,
    pageSelection:pageSelection
},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch