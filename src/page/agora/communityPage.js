import React, { Component } from 'react'
import '../../style/agoraPage.css'

import SideMenuPage from '../sideMenuPage/sideMenuPage'
import ArticleListPage from '../articleListPage/articleListPage'


export default class CommunityPage extends Component {
    render() {
        return (
            <div className="communityPage">
                <SideMenuPage></SideMenuPage>
                <ArticleListPage></ArticleListPage>
            </div>
        )
    }
}
