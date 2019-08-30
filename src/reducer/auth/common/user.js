import { handleActions } from 'redux-actions';
import * as type from '../../actionTypes'

const initialState = {
}

export default handleActions({
    [type.UPDATE_USER] : (state,action) =>   action.payload  
},initialState)