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
                    <Route path="/community/:name"  component={Coummnity} />
                    <Route path="/addArticle/:name" component={AddArticlePage}/>
                </Switch>
            </div>
        )
    }
}
