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
    default:
      return state;
  }
};
export default reducer;
