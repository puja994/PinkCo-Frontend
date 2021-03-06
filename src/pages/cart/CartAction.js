import {
    requestPending,
    cartSuccess,
    deleteCartSuccess,
    requestFail,
  } from "./CartSlice";
  
  export const addProductToCart = (itemsList, selectedQuantity) => async (dispatch) => {
    try {
      const newItem = {
        ...itemsList,
        selectedQuantity,
      };
      dispatch(cartSuccess(newItem))
      localStorage.setItem("cart", JSON.stringify(newItem))
    } catch (error) {
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
  
  export const deleteFromCart = (item) => async (dispatch) => {
    try {
      dispatch(deleteCartSuccess(item))
      localStorage.removeItem("cart", JSON.stringify(item));
    } catch (error) {
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
  