import  { handleActions } from 'redux-actions';
import * as type from '../../actionTypes'
const initialState = {
    isLoading : false,
    error : null
}

export default handleActions({
    [type.ADD_ARTICLE_REQUEST] : (state) => Object.assign({},state, {isLoading : true}),
    [type.ADD_ARTICLE_SUCCESS] : (state) => Object.assign({},state, {isLoading : false}),
    [type.ADD_ARTICLE_FAILED] : (state,action) => Object.assign({},state, {isLoading : false, error: action.payload}),
}, initialState)