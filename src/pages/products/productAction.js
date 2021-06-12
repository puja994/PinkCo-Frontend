import {
    requestPending,
    getProductSuccess,
    selectedProductSucess,
    requestFail,
    selectedProductBySlugSucess,
  } from "./productSlice";
  import { getAProductAPIBySlugValue, productAPI } from "../../api/productAPI";
  import { categoryAPI, getAProductAPI } from "../../api/categoryAPI";
  
  export const fetchProducts = () => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await productAPI(); 
      dispatch(getProductSuccess(result));
    } catch (error) {
  
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
  
  export const fetchSelectedProducts = (_id) => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await getAProductAPI(_id)
      dispatch(selectedProductSucess(result));
    } catch (error) {
      console.log(error);
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
  
  export const fetchGivenSlugProduct = (slugValue) => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await getAProductAPIBySlugValue(slugValue)
      dispatch(selectedProductBySlugSucess(result));
    } catch (error) {
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
  