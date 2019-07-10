import React, { Component } from 'react'
<<<<<<< HEAD
import Notice from '../../component/common/Notice'
import ArticleListHeader from '../../component/common/articleListHeader'

=======
import Notice from '../../component/common/header'
import ArticleListHeader from '../../component/common/articleListHeader'
import {Switch , Route } from 'react-router-dom'
<<<<<<< Updated upstream
import Editor from '../../component/common/textEditor'
>>>>>>> master
=======
// import Editor from '../../component/common/textEditor'
>>>>>>> Stashed changes

export default class ArticleListPage extends Component {
    render() {
        return (
            <div className="articleListPage">
<<<<<<< HEAD
                <Notice/>
                <ArticleListHeader/>
=======
                <Notice></Notice>
                <Switch>
                     <Route path="/agora"  component={ArticleListHeader} />
                     {/* <Route path="/agora" exact component={Editor}/> */}
                </Switch>
>>>>>>> master
            </div>
        )
    }
}
