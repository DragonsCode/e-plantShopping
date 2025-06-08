import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const { id, name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ id, name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.id === id);
        if (itemToUpdate) {
            if (quantity <= 0) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                itemToUpdate.quantity = quantity;
            }
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;