import streams from "../../apis/streams";

export const createStream = formValues => {
  return dispatch => {
    streams.post("/streams", formValues);
  };
};
