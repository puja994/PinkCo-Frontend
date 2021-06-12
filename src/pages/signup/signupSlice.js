import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  signupresponse: {},
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    signupSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.signupresponse = payload;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.signupresponse = payload;
    },
  },
});

const { reducer, actions } = signupSlice;
export const { requestPending, signupSuccess, requestFail } = actions;

export default reducer;
