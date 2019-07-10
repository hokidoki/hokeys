import React, { Component } from 'react'
import '../../style/agoraPage.css'

import SideMenuPage from '../sideMenuPage/sideMenuPage'
import ArticleListPage from '../articleListPage/articleListPage'


export default class AgoraPage extends Component {
    render() {
        return (
            <div className="agoraPage">
                <SideMenuPage></SideMenuPage>
                <ArticleListPage></ArticleListPage>
            </div>
        )
    }
}
