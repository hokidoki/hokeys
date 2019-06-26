import React, { Component } from 'react'
import '../style/mainpage.css'
import AgoraPage from './agora/agoraPage'
import {Switch , Route } from 'react-router-dom' 

export default class Mainpage extends Component {
    render() {
        return (
            <div className="mainpage">
                <Switch>
                <Route path="/agora" exact component={AgoraPage} />
                </Switch>
            </div>
        )
    }
}
