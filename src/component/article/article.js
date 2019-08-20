import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

export default class Article extends Component {

    componentWillUnmount(){
        console.log(10);
    }
    render() {
        const contents = ReactHtmlParser(this.props.content);
        return (
            <div className="articleContainner">
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
