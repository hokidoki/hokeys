import { handleActions } from 'redux-actions';
import * as type from '../../actionTypes';

const initialState = {
    isLoading : false,
    error : null
}

export default handleActions({
    [type.SIGN_IN_WITH_FACEBOOK_REQUEST] : (state) => Object.assign({},state, {isLoading : true}),
    [type.SIGN_IN_WITH_FACEBOOK_SUCCESS] : (state) => Object.assign({},state, {isLoading : false}),
    [type.SIGN_IN_WITH_FACEBOOK_FAILED] : (state,action) => Object.assign({},state, {isLoading : false, error: action.payload}),
}, initialState)