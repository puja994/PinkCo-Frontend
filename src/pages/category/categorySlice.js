import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    categoryList: [],
    selectedCategoryList: [],
  }

  const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
      requestPending: (state) => {
        state.isLoading = true;
      },
  
      getCategorySuccess: (state, { payload }) => {
        state.isLoading = false;
        state.categoryList = payload.result;
      },
      selectedCategorySuccess: (state, { payload }) => {
        state.isLoading = false;
  
        state.selectedCategoryList = payload.result;
      },
      requestFail: (state, { payload }) => {
        state.isLoading = false;
      },
    },
  });
  const { reducer, actions } = CategorySlice;
  export const {
    requestPending,
    getCategorySuccess,
    selectedCategorySuccess,
    requestFail,
  } = actions;
  
  export default reducer;