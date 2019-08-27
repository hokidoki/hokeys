import  { handleActions } from 'redux-actions';
import * as type from '../../actionTypes';
const initialState = {
    isLoading : false,
    doc : "",
    error : null
}

export default handleActions({
    [type.GET_ARTICLE_REQUEST] : (state) => Object.assign({},state, {isLoading : true, doc : ""}),
    [type.GET_ARTICLE_SUCCESS] : (state,action) => {
        const doc = action.payload;
        return Object.assign({},state, {isLoading : false , doc : doc})
    },
    [type.GET_ARTICLE_FAILED] : (state,action) => Object.assign({},state, {isLoading : false, error: action.payload}),
    [type.GET_ARTICLE_RESET] : (state) => Object.assign({}, state, {doc : ""})
}, initialState)