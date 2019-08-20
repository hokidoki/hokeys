import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as articleActions from '../../reducer/Article/actions';
import { bindActionCreators } from 'redux';

import Article from '../../component/article/article'

class ArticlePage extends Component {

    componentDidMount() {
        const {collection, id, getArticle} = this.props;
        getArticle(collection,id);
    }

    componentDidUpdate(oldProps){
        const newProps = this.props;
        if(oldProps.location.search !== newProps.location.search) {
            this.props.getArticle(newProps.collection,newProps.id);
        }
    }

    componentWillUnmount(){
        this.props.articleReset();
    }
    
    render() {
        const {article} = this.props;
        let item;
        if(article){
            item = article.doc.data();
        }
        return (
            <div className="articleContainner">
                { article ? <Article id={item.id} title={item.title} content={item.content}/> : null}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        article : state.article.getArticle.doc
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getArticle : bindActionCreators(articleActions.getArticle,dispatch),
        articleReset : bindActionCreators(articleActions.getArticleReset,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ArticlePage))
