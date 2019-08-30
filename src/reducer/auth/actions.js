import { createAction } from 'redux-actions';
import * as types from '../actionTypes'
import * as authAPI from '../../infra/firebase/api'
import * as modalActions from '../loginBoxReducer'


//로그인 유저 갱신 
export const updateUser = createAction(types.UPDATE_USER);


//페이스북 로그인 
const signInWithFacebookRequest = createAction(types.SIGN_IN_WITH_FACEBOOK_REQUEST);
const signInWithFacebookSuccess = createAction(types.SIGN_IN_WITH_FACEBOOK_SUCCESS);
const signInWithFacebookFailed = createAction(types.SIGN_IN_WITH_FACEBOOK_FAILED);

export const signInWithFacebook = ()=>{
    return (dispatch) =>{
        dispatch(signInWithFacebookRequest());
        authAPI.signWithFacebookAPI()
            .then(()=>{
                dispatch(signInWithFacebookSuccess())
                dispatch(modalActions.login_modal_close())
            })
            .catch((error)=>{
                dispatch(signInWithFacebookFailed(error))
            })
    }
}

//구글 로그인 

const signInWithGoogleRequest = createAction(types.SIGN_IN_WITH_GOOGLE_REQUEST);
const signInWithGoogleSuccess = createAction(types.SIGN_IN_WITH_GOOGLE_SUCCESS);
const signInWithGoogleFailed = createAction(types.SIGN_IN_WITH_GOOGLE_FAILED);

export const signInWithGoogle = ()=>{
    return (dispatch)=>{
        dispatch(signInWithGoogleRequest());
        authAPI.signWithGoogleAPI()
        .then(()=>{
            dispatch(signInWithGoogleSuccess())
            dispatch(modalActions.login_modal_close())
        })
        .catch((error)=>{
            dispatch(signInWithGoogleFailed(error))
        })
    }
}
//로그아웃
const signOutRequest = createAction(types.SIGN_OUT_REQUEST);
const signOutSuccess = createAction(types.SIGN_OUT_SUCCESS);
const signOutFailed = createAction(types.SIGN_OUT_FAILED);

export const signOut = ()=>{
    return (dispatch) =>{
        dispatch(signOutRequest());
        authAPI.signOut()
        .then(()=>{
            dispatch(signOutSuccess)
        })
        .then((error)=>{
            dispatch(signOutFailed(error))
        })
    }
}

