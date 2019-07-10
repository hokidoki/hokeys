import * as addArticleAPI  from '../../infra/addArticle/api';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';

const addArticleRequest = createAction(types.ADD_ARTICLE_REQUEST);
const addArticleSuccess = createAction(types.ADD_ARTICLE_SUCCESS);
const addArticleFailed = createAction(types.ADD_ARTICLE_FAILED);

export const addArticle = ({content,file}) =>{
    return (dispatch,getState) =>{
        const state = getState();
        dispatch(addArticleRequest());
        
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;
        //getState를 쓰면 현재 스토어의 스테이트를 알 수 있다. 
        addArticleAPI.addArticle({userId,content,file,userDisplayName,userProfileUrl})
        .then(()=>{
            dispatch(addArticleSuccess());
        }).catch((error)=>{
            dispatch(addArticleFailed(error));
        })
    }
}