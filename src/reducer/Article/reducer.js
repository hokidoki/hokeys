import { combineReducers } from 'redux';
import addArticle from './addArticle/addArticle';
import articleList from './getArticleListItem/getArticleListItem';
import getArticle from './getArticle/getArticle';

export default combineReducers({
  addArticle,
  articleList,
  getArticle
})
