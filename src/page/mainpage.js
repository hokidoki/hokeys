import React, { Component } from 'react'
import { Redirect ,Switch, Route } from 'react-router-dom'

import Coummnity from './agora/communityPage'
import ArticlePage from './ArticlePage/ArticlePage'

import '../style/mainpage.css'
import { connect } from 'react-redux';


 class Mainpage extends Component {
    render() {
        const { account } = this.props;
        return (
            <div className="mainpage">
                <Switch>
                    <Route path="/community/:name"  component={Coummnity} />
                    {
                        account ? <Route path="/Article/:name" component={ArticlePage}/> : <Redirect to="/"/>
                    }
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        account : state.auth.user
    }
}

export default connect(mapStateToProps,null)(Mainpage)