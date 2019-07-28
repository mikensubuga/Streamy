import * as actionTypes from '../actions/actionTypes'
const initialState ={
    isSignedIn=null,
    userId: null
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return{
                ...state,
                isSignedIn:true,
                userId:action.id
            }
        case actionTypes.SIGN_OUT:
            return{
                ...state,
                isSignedIn:false,
                userId:null
            }
            
        default:
            return state;
    }
}

export default reducer;