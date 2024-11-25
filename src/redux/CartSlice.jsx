import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice += action.payload.price;
            } else {
              state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
          },
          removeItem(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              state.totalQuantity -= existingItem.quantity;
              state.totalPrice -= existingItem.totalPrice;
              state.items = state.items.filter(item => item.id !== action.payload.id);
            }
          },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                state.totalPrice += (quantity - item.quantity) * item.price;
                state.totalQuantity += (quantity - item.quantity)
                item.quantity = quantity;
            }
        },
    }
})


export const { addToCart,removeItem,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;