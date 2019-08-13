import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        this.props.articleActions(params.name,null,5);
    }
    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if(oldProps.params !== newProps.params) {
            const { params } = newProps;
            this.props.articleActions(params.name,null,100);
        }
    }

    render() {
        const { list,params,history } = this.props;
        const { pageNumb, showArticle} = this.state;
        const listView = list.map((doc, index) => {
            const item = doc.data();
            const start = (pageNumb - 1) * showArticle;
            const end = pageNumb * showArticle;

            if(index >= start && index < end){
                return <ArticleItem
                key = {item.id}
                articleTitle = {item.title}
                createdAt = {item.createdAt}
            />
            }else{
                console.log(index)
                return null;
            }
        });

        const movePageNumb = (pageNumb) =>{
            history.push(`/community/${params.name}?page=${pageNumb}`);
            this.setState({
                pageNumb : pageNumb,
                showArticle : 3,
            })
            console.log(this.state)
        }

        const listIndex = ()=>{
            let length;
            let listIndex = [];            
            length = Math.ceil(list.length / this.state.showArticle);
            console.log(length);
            console.log(list.length % this.state.showArticle)
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        articleActions: bindActionCreators(articleActions.getArticleList, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleListPage));