import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer :{
        cart: addCartReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch