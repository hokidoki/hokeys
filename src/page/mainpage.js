import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Coummnity from './agora/communityPage'
import AddArticlePage from './addArticlePage/addArticlePage'

import '../style/mainpage.css'


export default class Mainpage extends Component {
    render() {
        return (
            <div className="mainpage">
                <Switch>
                    <Route path="/community/agora" component={Coummnity} />
                    <Route path="/community/window" component={Coummnity} />
                    <Route path="/community/apple" component={Coummnity} />
                    <Route path="/community/linux" component={Coummnity} />
                    <Route path="/community/android" component={Coummnity} />
                    <Route path="/community/ios" component={Coummnity} />
                    <Route path="/addArticle" component={AddArticlePage}/>
                </Switch>
            </div>
        )
    }
}
