import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);

      if (index >= 0) {
        // if  the item is already in the cart increase its quantity
        toast.error("Course already In cart");
        return;
      }
      //   if  it's not in the cart then push it into the array of courses
      state.cart.push(course);
      //    update  the total quantity and price
      state.totalItems++;
      state.total += course.price;

      // update to localStorage
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

      toast.success("Course added to cart");
    },

    removeFromCart: (state, action) => {
      const courseId = action.payload;
      const index = state.cart.findIndex((item) => item._id === courseId);

      if (index >= 0) {
        // if the item/course found in a cart, then remove it
        state.totalItems--;
        state.total -= state.cart[index].price;
        state.cart.slice(index, 1);
        // update to localStorage

        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        localStorage.setItem("total", JSON.stringify(state.total));
        toast.success("course remove Successful");
      }
    },

    resetCart: (state, action) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      // update in localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("totalItems");
      localStorage.removeItem("total");
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
