import streams from "../../apis/streams";
import * as actionTypes from "./actionTypes";

export const createStreamStart = () => {
  return {
    type: actionTypes.CREATE_STREAM_START
  };
};

export const createStreamSuccess = response => {
  return {
    type: actionTypes.CREATE_STREAM_SUCCESS,
    res: response
  };
};
export const createStreamFail = error => {
  return {
    type: actionTypes.CREATE_STREAM_FAIL,
    error: error
  };
};
export const createStream = formValues => {
  return dispatch => {
    dispatch(createStreamStart());
    streams
      .post("/streams", formValues)
      .then(res => {
        dispatch(createStreamSuccess(res.data));
      })
      .catch(err => {
        dispatch(createStreamFail(err));
      });
  };
};
