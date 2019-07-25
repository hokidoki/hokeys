import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../reducer/Article/actions';
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader';
import ArticleItem from '../../component/article/ArticleItem';
import '../../style/articleListItem.css'

 class ArticleListPage extends Component {

    componentDidMount(){
        this.props.articleActions(null,3);
    }

    static defaultProps = {
        list : []
    }

    render() {
        const { list } = this.props;
        const listView = list.map((doc, index) => {
            const item = doc.data();
            return <ArticleItem
                key = {item.id}
                articleTitle = {item.title}
                createdAt = {item.createdAt}
            />
        });
        console.log(listView)        
        return (
            <div className="articleListPage">
                <Notice/>
                <ArticleListHeader/>
                { list ? listView : null}
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