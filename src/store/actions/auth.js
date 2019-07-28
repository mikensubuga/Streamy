import * as actionTypes from "./actionTypes";

export const signIn = () => {
  return {
    type: actionTypes.SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT
  };
};
