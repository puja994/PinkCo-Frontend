import {
    requestPending,
    getCategorySuccess,
    requestFail,
  } from "./categorySlice";

  import { categoryAPI } from "../../api/categoryAPI"

  export const fetchCategory = () => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await categoryAPI();
      dispatch(getCategorySuccess(result));
    } catch (error) {
      console.log(error);
      const err = {
        status: "error",
        message: error.message,
      };
      dispatch(requestFail(err));
    }
  };
  