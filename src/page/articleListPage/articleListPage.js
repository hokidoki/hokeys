import React, { Component } from 'react'
import Notice from '../../component/common/header'
import ArticleListHeader from '../../component/common/articleListHeader'
import {Switch , Route } from 'react-router-dom'
import Editor from '../../component/common/textEditor'

export default class ArticleListPage extends Component {
    render() {
        return (
            <div className="articleListPage">
                <Notice></Notice>
                <Switch>
                     <Route path="/agora" exact component={ArticleListHeader} />
                     <Route path="/agora/addArticle" component={Editor}/>
                </Switch>
            </div>
        )
    }
}
