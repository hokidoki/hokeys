import  { handleActions } from 'redux-actions';
import * as type from '../../actionTypes'
const initialState = {
    isLoading : false,
    list : [],
    error : null
}

export default handleActions({
    [type.GET_ARTICLE_LIST_REQUSET] : (state) => Object.assign({},state, {isLoading : true}),
    [type.GET_ARTICLE_LIST_SUCCESS] : (state,action) => {
        const { list , isConcat } = action.payload; 
        const newList =isConcat ? [...state.list,...list] : [...list];

        return Object.assign({},state, {isLoading : false , list : newList})
    },
    [type.GET_ARTICLE_LIST_FAILED] : (state,action) => Object.assign({},state, {isLoading : false, error: action.payload}),
}, initialState)