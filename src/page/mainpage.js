import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Coummnity from './agora/communityPage'
import AddArticlePage from './addArticlePage/addArticlePage'

import '../style/mainpage.css'
import AgoraPage from './agora/agoraPage'
import {Switch , Route } from 'react-router-dom' 


export default class Mainpage extends Component {
    render() {
        return (
            <div className="mainpage">
                <Switch>
<<<<<<< HEAD
                    <Route path="/community/agora" component={Coummnity} />
                    <Route path="/community/window" component={Coummnity} />
                    <Route path="/community/apple" component={Coummnity} />
                    <Route path="/community/linux" component={Coummnity} />
                    <Route path="/community/android" component={Coummnity} />
                    <Route path="/community/ios" component={Coummnity} />
                    <Route path="/addArticle" component={AddArticlePage}/>
=======
                <Route path="/agora" exact component={AgoraPage} />
>>>>>>> master
                </Switch>
            </div>
        )
    }
}
