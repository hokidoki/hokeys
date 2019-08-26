import  { handleActions } from 'redux-actions';
import * as type from '../../actionTypes';
const initialState = {
    isLoading : false,
    doc : "",
    error : null
}

export default handleActions({
    [type.DELETE_ARTICLE_REQUEST] : (state) => Object.assign({},state, {isLoading : true}),
    [type.DELETE_ARTICLE_SUCCESS] : (state) => Object.assign({},state, {isLoading : false}),
    [type.DELETE_ARTICLE_FAILED] : (state,action) => Object.assign({},state, {isLoading : false, error: action.payload}),
}, initialState)