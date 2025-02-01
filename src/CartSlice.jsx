import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item=> item.id === newItem.id);
      if (existingItem) {
        // If item already exists, update its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If it's a new item, add it to the cart with the quantity
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
