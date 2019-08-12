import * as actionTypes from "../actions/actionTypes";
const initialState = {
  stream: {},
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
export default reducer;
