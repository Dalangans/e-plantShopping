import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          quantity: 1,
        });
      }

      // Update totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      // Update totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // Update quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }

      // Update totals
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    // Clear cart
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export default store;
