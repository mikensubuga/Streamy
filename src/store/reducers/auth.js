import * as actionTypes from '../actions/actionTypes'
const initialState ={
    isSignedIn=null
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return{
                ...state,
                isSignedIn:true
            }
        case actionTypes.SIGN_OUT:
            return{
                ...state,
                isSignedIn:false
            }
            
        default:
            return state;
    }
}

export default reducer;