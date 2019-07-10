import React, { Component } from 'react'
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader'


export default class ArticleListPage extends Component {
    render() {
        return (
            <div className="articleListPage">
                <Notice/>
                <ArticleListHeader/>
            </div>
        )
    }
}
