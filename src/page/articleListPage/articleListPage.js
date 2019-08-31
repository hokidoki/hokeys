import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import querystring from 'query-string';
import * as articleActions from '../../reducer/Article/actions';
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader';
import ArticleItem from '../../component/article/ArticleItem';
import ArticlePage from '../agora/articlePage.js'
import '../../style/articleListItem.css'


 class ArticleListPage extends Component {


    static defaultProps = {
        list : []
    }

    componentDidMount(){
        const { params } = this.props;
        if(this.props.list.length === 0){
            this.props.getArticleList(params.name,null,100);
        }
    }

  
    render() {
        const { list,params,history,location,showArticle,account } = this.props;
        const query = querystring.parse(location.search);
        const listView = list.map((doc, index) => {
            const item = doc.data();
            const pageNumb = query.page ? query.page : 1;
            const start = (pageNumb - 1) * showArticle;
            const end = pageNumb * showArticle;
            if(index >= start && index < end){
                return <ArticleItem
                id = {item.id}
                key = {item.id}
                articleTitle = {item.title}
                createdAt = {item.createdAt}
                collection = {params.name}
                image = {item.imgDocNames}
                page = {pageNumb}
                history ={history}
            />
            }else{
                return null;
            }
        });

        const movePageNumb = (pageNumb) =>{
            history.push(`/community/${params.name}?page=${pageNumb}`);
        }

        const listIndex = ()=>{
            let length;
            let listIndex = [];            
            length = Math.ceil(list.length / showArticle);
            for(let i = 1; i <= length; i++){
                listIndex.push(i);
            }
            return listIndex.map((index)=>{
                return <ListIndex movePage={movePageNumb} key={index} pageNumb={index}></ListIndex>
            })
        }
                
        return (
            <div className="articleListPage">
                <Notice/>
                <ArticleListHeader params={params}/>
                {query.id != null ? <ArticlePage account ={account} collection={params.name} id={query.id}/> : null }
                { list ? listView : null}
                { list ? listIndex(): null}
            </div>
        )
    }
}


class ListIndex extends Component{
    
    render(){
        const {pageNumb,movePage} = this.props;
        const MoveNext = ()=>{
            movePage(pageNumb);
        }
        return(
            <Fragment>
                <div className="listIndex" onClick={MoveNext}>{pageNumb}</div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account : state.auth.user,
        list: state.article.articleList.list,
        isLoading: state.article.articleList.isLoading,
        showArticle : state.article.showArticle.showArticle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleList: bindActionCreators(articleActions.getArticleList, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleListPage));