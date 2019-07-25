import React, { Component } from 'react'

import SideMenuPage from '../sideMenuPage/sideMenuPage'
import ArticleListPage from '../articleListPage/articleListPage'


export default class CommunityPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="communityPage">
                <SideMenuPage></SideMenuPage>
                <ArticleListPage params={match.params}></ArticleListPage>
            </div>
        )
    }
}
