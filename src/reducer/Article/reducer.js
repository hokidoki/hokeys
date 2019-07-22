import { combineReducers } from 'redux';
import addArticle from './addArticle/addArticle';
import articleList from './getArticleListItem/getArticleListItem';

export default combineReducers({
  addArticle,
  articleList
})
