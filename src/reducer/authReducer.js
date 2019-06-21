import { handleActions, createAction } from 'redux-actions'
import { signWithGoogleAPI, signWithFacebookAPI } from '../infra/firebase/api'
import { pender } from 'redux-pender';

const SIGN_IN_WITH_GOOGLE = "SIGN_IN_WITH_GOOGLE";
const SIGN_IN_WITH_FACEBOOK = "SIGN_IN_WITH_FACEBOOK";

export const signWithGoogle = createAction(SIGN_IN_WITH_GOOGLE, signWithGoogleAPI);
export const signWithFacebook = createAction(SIGN_IN_WITH_FACEBOOK, signWithFacebookAPI)

export default handleActions({
    ...pender({
        type: SIGN_IN_WITH_GOOGLE,
        onSuccess: (state, action) => {
            return Object.assign({}, state, {
                user: action.payload
            });
        }
    })
    , ...pender({
        type: SIGN_IN_WITH_FACEBOOK,
        onSuccess: (state, action) => {
            return Object.assign({}, state, {
                user: action.payload
            });
        }
    }),
}, {
        user: null,
        accessToken: null,
        error: null
    })

