import React, { Component } from 'react'

export default class ArticleItem extends Component {

    static defaultProps = {
        articleTitle : "articleTitle",
        createdAt : new Date().toString(),
        file : null,
        picture : null,
        likeCnt : 0,
        commentCnt : 0,
        clicked : 0
    }

    render() {
        const { createdAt } = this.props;
        let datetime = "";
        if(createdAt && createdAt.seconds){
            datetime = new Date(createdAt.seconds*1000).toISOString().substring(0,10);
        }
        return (
            <div className="articleListItemContainner">
                <div className="titleCreatedAtContainner IB">
                    <div className="articleTitle">
                        {this.props.articleTitle}
                    </div>
                    <div className="createdAt">
                        {datetime}
                    </div>
                </div>
                <div className="adtional IB">
                    <div className="file IB center">
                        {this.props.file ? "y" : "n"}
                    </div>
                    <div className="picture IB center">
                        {this.props.file ? "y" : "n"}
                    </div>
                </div>
                <div className="likeCount IB center">
                    {this.props.likeCnt}
                </div>
                <div className="commentCount IB center">
                    {this.props.commentCnt}
                </div>
                <div className="clicked IB center">
                    {this.props.clicked}
                </div>
          </div>
        )
    }
}
