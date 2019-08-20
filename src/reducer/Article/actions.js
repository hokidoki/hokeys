import * as ArticleAPI  from '../../infra/Article/api';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';
import { push } from 'connected-react-router';

const addArticleRequest = createAction(types.ADD_ARTICLE_REQUEST);
const addArticleSuccess = createAction(types.ADD_ARTICLE_SUCCESS);
const addArticleFailed = createAction(types.ADD_ARTICLE_FAILED);

export const addArticle = (whereCollection,title,content,file) =>{
    return (dispatch,getState) =>{
        dispatch(addArticleRequest());

        const state = getState();        
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;
        //getState를 쓰면 현재 스토어의 스테이트를 알 수 있다. 
        ArticleAPI.addArticle({whereCollection,title,userId,content,file,userDisplayName,userProfileUrl})
        .then(()=>{
            dispatch(addArticleSuccess());
            dispatch(push(`/community/${whereCollection}`));
        }).catch((error)=>{
            dispatch(addArticleFailed(error));
        })
    }
}

const getArticleListRequest = createAction(types.GET_ARTICLE_LIST_REQUSET);
const getArticleListSuccess = createAction(types.GET_ARTICLE_LIST_SUCCESS);
const getArticleListFailed = createAction(types.GET_ARTICLE_LIST_FAILED);

export const getArticleList = (collection,lastItem,count) =>{ return (dispatch, getState) => {
    dispatch(getArticleListRequest())
    ArticleAPI.getArticleList(collection,lastItem,count)
    .then((snapShot) => {
        dispatch(getArticleListSuccess({
            list : snapShot.docs,
            isConcat : lastItem ? true : false,
        }))
    }).catch((error) => {
        console.log(error);
        dispatch(getArticleListFailed(error))
        })
    }
}

export const goToCommunity = (collection,lastItem,count) =>{
    return (dispatch, getState) => {
        dispatch(getArticleListRequest())
        ArticleAPI.getArticleList(collection,lastItem,count)
        .then((snapShot) => {
            dispatch(getArticleListSuccess({
                list : snapShot.docs,
                isConcat : lastItem ? true : false,
            }))
        }).then(()=>{
            dispatch((push(`/community/${collection}`)))
        }).catch((error) => {
            console.log(error);
            dispatch(getArticleListFailed(error))
        })
    }
}

const getArticleRequest = createAction(types.GET_ARTICLE_REQUEST);
const getArticleSuccess = createAction(types.GET_ARTICLE_SUCCESS);
const getArticleFailed = createAction(types.GET_ARTICLE_FAILED);

export const getArticleReset = createAction(types.GET_ARTICLE_RESET);

export const getArticle = (collection,articleId) =>{
    return (dispatch,getState)=>{
        dispatch(getArticleRequest);
        ArticleAPI.getArticle(collection,articleId)
        .then((snapShot)=>{
            dispatch(getArticleSuccess({
                doc : snapShot
            }))
        }).catch((error)=>{
            console.log(error)
            dispatch(getArticleFailed(error))
        })
    }
}

