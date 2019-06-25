import { handleActions } from 'redux-actions';
import * as type from '../../actionTypes';

const initialState = {
    isLoading : false,
    error : null
}

export default handleActions({
    [type.SIGN_OUT_REQUEST] : (state)=>Object.assign({},state,{ isLoading : true}),
    [type.SIGN_OUT_SUCCESS] : (state)=>Object.assign({},state,{ isLoading : false}),
    [type.SIGN_OUT_FAILED] : (state,error)=>Object.assign({},state,{ isLoading : false , error : error}),
},initialState)