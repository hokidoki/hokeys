import * as ArticleAPI  from '../../infra/Article/api';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';

const addArticleRequest = createAction(types.ADD_ARTICLE_REQUEST);
const addArticleSuccess = createAction(types.ADD_ARTICLE_SUCCESS);
const addArticleFailed = createAction(types.ADD_ARTICLE_FAILED);

export const addArticle = (title,content,file) =>{
    return (dispatch,getState) =>{
        dispatch(addArticleRequest());

        const state = getState();        
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;
        //getState를 쓰면 현재 스토어의 스테이트를 알 수 있다. 
        ArticleAPI.addArticle({title,userId,content,file,userDisplayName,userProfileUrl})
        .then(()=>{
            dispatch(addArticleSuccess());
        }).catch((error)=>{
            dispatch(addArticleFailed(error));
        })
    }
}

const getArticleListRequest = createAction(types.GET_ARTICLE_LIST_REQUSET);
const getArticleListSuccess = createAction(types.GET_ARTICLE_LIST_SUCCESS);
const getArticleListFailed = createAction(types.GET_ARTICLE_LIST_FAILED);

export const getArticleList = (lastItem,count) =>{ return (dispatch, getState) => {
    dispatch(getArticleListRequest())
    ArticleAPI.getArticleList(lastItem,count)
    .then((snapShot) => {
        console.log(snapShot.docs);
        dispatch(getArticleListSuccess({
            list : snapShot.docs,
            isConcat : lastItem ? true : false
        }))
    }).catch((error) => {
        console.log(error);
        dispatch(getArticleListFailed(error))
        })
    }
}