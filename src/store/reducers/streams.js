import _ from "lodash";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  stream: {},
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STREAMS_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.FETCH_STREAMS_SUCCESS:
      return {
        ...state,
        stream: {
          ...state.stream,
          ..._.mapKeys(action.streams, "id")
        },
        loading: false,
        error: false
      };
    case actionTypes.FETCH_STREAMS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    case actionTypes.CREATE_STREAM_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.CREATE_STREAM_SUCCESS:
      return {
        ...state,
        stream: {
          ...state.stream,
          [action.res.id]: action.res
        },
        loading: false,
        error: false
      };
    case actionTypes.CREATE_STREAM_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };

    case actionTypes.FETCH_STREAM_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.FETCH_STREAM_SUCCESS:
      return {
        ...state,
        stream: {
          ...state.stream,
          [action.stream.id]: action.stream
        },
        loading: false,
        error: false
      };
    case actionTypes.FETCH_STREAM_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };

    case actionTypes.EDIT_STREAM_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.EDIT_STREAM_SUCCESS:
      return {
        ...state,
        stream: {
          ...state.stream,
          [action.stream.id]: action.response
        },
        loading: false,
        error: false
      };
    case actionTypes.EDIT_STREAM_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };

    case actionTypes.DELETE_STREAM_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.DELETE_STREAM_SUCCESS:
      return _.omit(initialState, action.payload);

    // loading: false,
    // error: false

    case actionTypes.DELETE_STREAM_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
export default reducer;
