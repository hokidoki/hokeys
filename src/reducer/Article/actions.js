import * as ArticleAPI  from '../../infra/Article/api';
import { createAction } from 'redux-actions';
import * as types from '../actionTypes';
import { push } from 'connected-react-router';

const addArticleRequest = createAction(types.ADD_ARTICLE_REQUEST);
const addArticleSuccess = createAction(types.ADD_ARTICLE_SUCCESS);
const addArticleFailed = createAction(types.ADD_ARTICLE_FAILED);

export const addArticle = (whereCollection,title,content) =>{
    return (dispatch,getState) =>{
        dispatch(addArticleRequest());
        const state = getState();        
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;

      
        ArticleAPI.imageSrcSet(content,whereCollection).then((doc)=>{
                ArticleAPI.addArticle({whereCollection,title,userId,doc,userDisplayName,userProfileUrl})
            .then(()=>{
                dispatch(addArticleSuccess());
                dispatch(push(`/community/${whereCollection}`));
            }).catch((error)=>{
                dispatch(addArticleFailed(error));
            })
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
        console.log(snapShot.size)
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
    return (dispatch)=>{
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

export const getArticleForUpdate = (collection,articleId) =>{
    return (dispatch,getState)=>{
        dispatch(getArticleRequest);
        ArticleAPI.getArticle(collection,articleId)
        .then((snapShot)=>{
            const articleOwner = snapShot.data().userId;
            const currentUser = getState().auth.user.uid;
            if(articleOwner === currentUser){
                dispatch(getArticleSuccess({
                    doc : snapShot
                }))
            }else{
                return new Promise((resolve,reject)=>{
                    reject("it's not yours")
                })
            }
        }).catch((error)=>{
            console.log(error)
            dispatch(getArticleFailed(error))
        })
    }
}

const deleteArticleRequest = createAction(types.DELETE_ARTICLE_REQUEST);
const deleteArticleSuccess = createAction(types.DELETE_ARTICLE_SUCCESS);
const deleteArticleFailed = createAction(types.DELETE_ARTICLE_FAILED);

export const deleteArticle = (whereCollection,articleId) =>{
    return (dispatch)=>{
        dispatch(deleteArticleRequest);
        ArticleAPI.deleteArticle(whereCollection,articleId).then(()=>{
            dispatch(deleteArticleSuccess())
            dispatch(goToCommunity(whereCollection))
        }).catch((error)=>{
            dispatch(deleteArticleFailed(error))
        })

    }
}

const updateArticleRequest = createAction(types.UPDATE_ARTICLE_REQUEST);
const updateArticleSuccess = createAction(types.UPDATE_ARTICLE_SUCCESS);
const updateArticleFailed = createAction(types.UPDATE_ARTICLE_FAILED);

export const updateArticle = (whereCollection,articleId,title,content) =>{
    return (dispatch,getState) =>{
        dispatch(updateArticleRequest());
        const state = getState();        
        const userId = state.auth.user.uid;
        const userDisplayName = state.auth.user.displayName;
        const userProfileUrl = state.auth.user.photoURL;
        const temp = state.article.getArticle.doc.doc.data();
        const createdAt = temp.createdAt;
        const docImage = temp.imgDocNames;

        ArticleAPI.imageSrcSet(content,whereCollection,docImage).then((doc)=>{
                ArticleAPI.updateArticle({whereCollection,articleId,title,doc,userId,userDisplayName,userProfileUrl,createdAt})
            .then(()=>{
                dispatch(updateArticleSuccess());
                dispatch(getArticleReset());
                dispatch(push(`/community/${whereCollection}`));
            }).catch((error)=>{
                dispatch(updateArticleFailed(error));
            })
        })
    }
}