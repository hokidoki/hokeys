import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'semantic-ui-react'
import * as articleActions from '../../reducer/Article/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class Article extends Component {
    deleteArticle = ()=>{
        const {collection,id,deleteArticle} = this.props;
        deleteArticle(collection,id)
    }
    render() {
        const contents = ReactHtmlParser(this.props.content);
        return (
            <div className="articleContainner">
                { this.props.account &&this.props.account.uid === this.props.userId ? <Button onClick={this.deleteArticle}>삭제</Button> : null}
                <div className="articleTitle">
                    {this.props.title}      
                </div>
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

export default connect(null,mapDispatchToProps)(Article)
