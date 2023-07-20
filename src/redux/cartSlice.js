import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            // state.cart.push(action.payload);
            // state.total += action.payload.price;
            const product = action.payload;
            const index = state.cart.findIndex((item) => item.id === product.id);
            if (index >= 0) {
                state.cart[index].quantity += product.quantity;
            } else {
                state.cart.push(product);
            }
            state.total += product.price * product.quantity;
        },
        // remove item from cart
        removeItem: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                state.cart = state.cart.filter((item) => item.id !== id);
                state.total -= item.price * item.quantity;
            }
        },
        removeAllItem: (state) => {
            state.cart = [];
            state.total = 0;
        },
    }
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, removeAllItem } = cartSlice.actions;

