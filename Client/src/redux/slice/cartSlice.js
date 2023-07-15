import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [1],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            // const existingCartId = state.cartItems.find(
            //     item => item.cartId === newItem.cartId
            // );

            // const existingproductSizeId = state.cartItems.find(
            //     (item) => item.productSizeId === newItem.productSizeId
            // )

            // if(!existingCartId && !existingproductSizeId) {
                // state.cartItems.push({
                //     cartId: newItem.cartId,
                //     productSizeId: newItem.productSizeId,
                //     quantity: newItem.quantity,
                //     price: newItem.price,
                //     note: newItem.note,
                // });
                console.log(newItem);
            //     return 1;
            // } else {
            //     return 0;
            // }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;