import React, { Component } from 'react'
import '../style/mainpage.css'
import AgoraPage from './agora/agoraPage'

export default class Mainpage extends Component {
    render() {
        return (
            <div className="mainpage">
                <AgoraPage/>
            </div>
        )
    }
}
