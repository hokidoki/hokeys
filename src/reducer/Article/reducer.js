import { combineReducers } from 'redux';
import addArticle from './addArticle/addArticle';
import articleList from './getArticleListItem/getArticleListItem';
import getArticle from './getArticle/getArticle';
import showArticle from './getArticleListItem/showArticle';

export default combineReducers({
  addArticle,
  articleList,
  getArticle,
  showArticle
})
