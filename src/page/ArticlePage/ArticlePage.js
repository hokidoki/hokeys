import React, { Component } from 'react'

import Editor from '../../component/common/textEditor';
import querystring from 'query-string'
import { bindActionCreators } from 'redux';

import Notice from '../../component/common/Notice'
import * as articleActions from '../../reducer/Article/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


class AddArticlePage extends Component {

    componentDidMount(){
        const {location,match,getArticleForUpdate} = this.props
        const query = querystring.parse(location.search);
        if(query.mod === "update"){
          getArticleForUpdate(match.params.name,query.id)
        }
      }

    
    
    
    render() {
        const { match, getArticle } =this.props;
        let doc;
        if(getArticle){
            doc = getArticle.doc.data();
        }
        console.log(doc)
        return (
            <div className="addArticlePage">
                <Notice></Notice>
        { doc ? <Editor doc={doc} params={match.params}></Editor> :<Editor doc={doc} params={match.params}></Editor>}                    
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      getArticle : state.article.getArticle.doc,
      isLoading : state.article.getArticle.isLoading
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getArticleForUpdate : bindActionCreators(articleActions.getArticleForUpdate,dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddArticlePage));
