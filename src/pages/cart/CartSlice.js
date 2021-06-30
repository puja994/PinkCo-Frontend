import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cartItemList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    cartSuccess: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      

      const remainingItem = state.cartItemList?.find(
        (item) => item._id === payload._id
      );

      if (remainingItem) {
        state.cartItemList = state.cartItemList?.map((row) =>
          row._id === remainingItem._id ? payload : row
        );
      } else {
        state.cartItemList.push(payload)
      }
    },
    deleteCartSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.cartItemList = state.cartItemList.filter(
        (Item) => Item._id !== payload._id
      );
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  requestPending,
  cartSuccess,
  deleteCartSuccess,
  requestFail,
} = actions;

export default reducer;