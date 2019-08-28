import { combineReducers } from 'redux';
import addArticle from './addArticle/addArticle';
import articleList from './getArticleListItem/getArticleListItem';
import getArticle from './getArticle/getArticle';
import showArticle from './getArticleListItem/showArticle';
import deleteArticle from './deleteArticle/deleteArticle';
import updateArticle from './updateArticle/updateArticle.js';

export default combineReducers({
  addArticle,
  articleList,
  getArticle,
  showArticle,
  deleteArticle,
  updateArticle
})
