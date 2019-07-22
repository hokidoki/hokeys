import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../reducer/Article/actions';
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader';

 class ArticleListPage extends Component {

    componentDidMount(){
            this.props.articleActions(null,3);
    }


    render() {
        return (
            <div className="articleListPage">
                <Notice/>
                <ArticleListHeader/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.article.articleList.list,
        isLoading: state.article.articleList.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        articleActions: bindActionCreators(articleActions.getArticleList, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);