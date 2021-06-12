import {
  requestPending,
  signupSuccess,
  requestFail,
} from "./signupSlice";

import { signupAPI } from "../../api/signupAPI";

export const signupAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await signupAPI(formData)
    dispatch(signupSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail());
    console.log(error);
  }
};
