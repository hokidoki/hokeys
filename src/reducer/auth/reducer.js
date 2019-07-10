import { combineReducers } from 'redux';
import signInWithFacebook from './facebook/signInWithFacebook'
import signInWithGoogle from './google/signInWithGoogle'
import signOut from './common/signOut'

import user from './common/user'

export default combineReducers({
    signInWithFacebook,
    signInWithGoogle,
    user,
    signOut
})
