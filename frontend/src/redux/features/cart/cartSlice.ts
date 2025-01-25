import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface cartItem {
    _id: string
    name: string
    price: number
    quantity: number
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
              initialState.cartItems.push(action.payload)
              alert('Items succesful added')
            } else {
                alert('Item already exist')
            }
        }
    }
})

export default cartSlice.reducer