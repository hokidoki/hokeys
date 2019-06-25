import { handleActions } from 'redux-actions';
import * as type from '../../actionTypes'

const initialState = null;

export default handleActions({
    [type.UPDATE_USER] : (state,action) => action.payload
},initialState)