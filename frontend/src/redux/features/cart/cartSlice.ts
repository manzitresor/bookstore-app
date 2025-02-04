import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface cartItem {
   _id: number;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
}

interface cartState {
    cartItems: cartItem[]
}

const initialState: cartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state,action: PayloadAction<cartItem>)=>{
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem) {
                state.cartItems=[...state.cartItems,action.payload]
                console.log("working",action.payload)
              alert('Items succesful added')
            } else {
                alert('Item already exist')
            }
        },
        removeCart: (state,action:PayloadAction<cartItem>) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        }
    }
})

export const { addCart,removeCart } = cartSlice.actions

export default cartSlice.reducer