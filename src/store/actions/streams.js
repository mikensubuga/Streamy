import streams from "../../apis/streams";
import * as actionTypes from "./actionTypes";
import history from "../../history";
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
  return (dispatch, getState) => {
    dispatch(createStreamStart());
    const { userId } = getState().auth;
    streams
      .post("/streams", { ...formValues, userId })
      .then(res => {
        dispatch(createStreamSuccess(res.data));
        history.push("/");
      })
      .catch(err => {
        dispatch(createStreamFail(err));
        console.log("err msg ", err);
      });
  };
};

export const fetchStreamsStart = () => {
  return {
    type: actionTypes.FETCH_STREAMS_START
  };
};

export const fetchStreamsSuccess = streams => {
  return {
    type: actionTypes.FETCH_STREAMS_SUCCESS,
    streams: streams
  };
};

export const fetchStreamsFail = error => {
  return {
    type: actionTypes.FETCH_STREAMS_FAIL,
    error: error
  };
};

export const fetchStreams = () => {
  return dispatch => {
    dispatch(fetchStreamsStart());
    streams
      .get("/streams")
      .then(res => {
        dispatch(fetchStreamsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchStreamsFail(err));
      });
  };
};

export const fetchStreamStart = () => {
  return {
    type: actionTypes.FETCH_STREAM_START
  };
};

export const fetchStreamSuccess = stream => {
  return {
    type: actionTypes.FETCH_STREAM_SUCCESS,
    stream: stream
  };
};

export const fetchStreamFail = error => {
  return {
    type: actionTypes.FETCH_STREAM_FAIL,
    error: error
  };
};

export const fetchStream = id => {
  return dispatch => {
    dispatch(fetchStreamStart());
    streams
      .get(`/streams/${id}`)
      .then(res => {
        dispatch(fetchStreamSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchStreamFail(err));
      });
  };
};

export const editStreamStart = () => {
  return {
    type: actionTypes.EDIT_STREAM_START
  };
};

export const editStreamSuccess = response => {
  return {
    type: actionTypes.EDIT_STREAM_SUCCESS,
    response: response
  };
};

export const editStreamFail = error => {
  return {
    type: actionTypes.EDIT_STREAM_FAIL,
    error: error
  };
};

export const editStream = (id, formValues) => {
  return dispatch => {
    dispatch(editStreamStart());
    streams
      .patch(`/streams/${id}`, formValues)
      .then(res => {
        console.log("edit res", res.data);

        dispatch(editStreamSuccess(res.data));
        history.push("/");
      })
      .catch(err => {
        dispatch(editStreamFail(err));
        console.log("error", err);
      });
  };
};

export const deleteStreamStart = () => {
  return {
    type: actionTypes.DELETE_STREAM_START
  };
};

export const deleteStreamSuccess = id => {
  return {
    type: actionTypes.DELETE_STREAM_SUCCESS,
    payload: id
  };
};

export const deleteStreamFail = error => {
  return {
    type: actionTypes.DELETE_STREAM_FAIL,
    error: error
  };
};

export const deleteStream = id => {
  return dispatch => {
    dispatch(deleteStreamStart());
    streams
      .delete(`/streams/${id}`)
      .then(res => {
        dispatch(deleteStreamSuccess(id));
        history.push("/");
      })
      .catch(err => {
        dispatch(deleteStreamFail(err));
      });
  };
};
