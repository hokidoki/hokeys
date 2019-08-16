import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import querystring from 'query-string';
import * as articleActions from '../../reducer/Article/actions';
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader';
import ArticleItem from '../../component/article/ArticleItem';
import '../../style/articleListItem.css'


 class ArticleListPage extends Component {

    state = {
        pageNumb : 1,
        showArticle : 3,
    }

    static defaultProps = {
        list : []
    }

    componentDidMount(){
        const { params } = this.props;
        this.props.getArticleList(params.name,null,100);
    }
    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if(oldProps.params !== newProps.params) {
            const { params } = newProps;
            this.props.getArticleList(params.name,null,100);
        }
    }


    render() {
        const { list,params,history,getArticle,location } = this.props;
        console.log(querystring.parse(location.search))
        const { pageNumb, showArticle} = this.state;
        const listView = list.map((doc, index) => {
            const item = doc.data();
            const start = (pageNumb - 1) * showArticle;
            const end = pageNumb * showArticle;
            if(index >= start && index < end){
                console.log(item);
                return <ArticleItem
                id = {item.id}
                key = {item.id}
                articleTitle = {item.title}
                createdAt = {item.createdAt}
                getArticle = {getArticle}
                collection = {params.name}
            />
            }else{
                return null;
            }
        });

        const movePageNumb = (pageNumb) =>{
            history.push(`/community/${params.name}?page=${pageNumb}`);
            this.setState({
                pageNumb : pageNumb,
                showArticle : 3,
            })
        }

        const listIndex = ()=>{
            let length;
            let listIndex = [];            
            length = Math.ceil(list.length / this.state.showArticle);
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
        list: state.article.articleList.list,
        isLoading: state.article.articleList.isLoading,
        Article : state.article.getArticle.doc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleList: bindActionCreators(articleActions.getArticleList, dispatch),
        getArticle : bindActionCreators(articleActions.getArticle,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleListPage));