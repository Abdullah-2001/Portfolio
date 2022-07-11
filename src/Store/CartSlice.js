import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    addToCart: (state, { payload }) => {
        const itemIndex = state.cart.findIndex(v => v.id === payload.id ? true : false)
        return {
            cart: itemIndex ? (
                state.cart.qty = payload.qty += 1
            ) : (
                state.cart.push({
                    ...state,
                    qty: 1
                })
            )
        }
    },
    removeFromCart: (state, { payload }) => {
        const itemIndex = state.cart.findIndex(v => v.id === payload.id)
        state.cart.splice(itemIndex, 1)
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice