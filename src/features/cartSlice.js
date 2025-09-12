import { createSlice } from "@reduxjs/toolkit";

const getCart = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
  return JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
  //return JSON.parse(localStorage.getItem("cart")) || [];
}         
  
const setCart = cart => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
   //localStorage.setItem("cart", JSON.stringify(cart));
}     

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCart(), // [{id, quantity}]
  },  
  reducers: {
    addToCart(state, action) {
     // const { id } = action.payload;
      const id = action.payload;
      // console.log("payload id: ", id);
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ id, quantity: 1 });
      }
      setCart(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      setCart(state.items);
    },
    updateCartQty(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
        setCart(state.items);
      }
    }
  }
});

export const { addToCart, removeFromCart, updateCartQty } = cartSlice.actions;
export default cartSlice.reducer;
