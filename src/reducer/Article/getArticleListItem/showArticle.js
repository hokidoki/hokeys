import  { handleActions } from 'redux-actions';
import * as type from '../../actionTypes'
const initialState = {
    showArticle : 3
}

export default handleActions({
    [type.CHANGE_SHOW_ARTICLE] : (state,action) => {
        return Object.assign({},state, {
            showArticle : action.payload
        })
    },
}, initialState)