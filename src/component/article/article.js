import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'semantic-ui-react'
import * as articleActions from '../../reducer/Article/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

 class Article extends Component {

    deleteArticle = ()=>{
        const {collection,id,deleteArticle} = this.props;
        deleteArticle(collection,id)
    }

    modifyArticle = () =>{
        const {collection,id} = this.props;
        this.props.history.push(`/Article/${collection}?id=${id}&&mod=update`)
    }
    
    render() {
        const contents = ReactHtmlParser(this.props.content);
        const modifyDelete = 
        <div className="modifyDelete">
            <ul className ="modifyUl">
                <li><Button color='blue' className="mini ui button" onClick={this.modifyArticle}>수정</Button></li><li><Button color='red' className="mini ui button" onClick={this.deleteArticle}>삭제</Button></li>
            </ul>
        </div>;
        return (
            <div className="articleContainner">
                <div className="getArticleTitle">
                    {this.props.title}      
                </div>
                { this.props.account &&this.props.account.uid === this.props.userId ? 
                    modifyDelete : null}
                <div className="articleContent">
                    {contents}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        deleteArticle : bindActionCreators(articleActions.deleteArticle,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Article))
