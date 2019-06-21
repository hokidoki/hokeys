import React, { Component } from 'react'
import Login from '../component/login'
import '../style/loginboxpage.css'

export default class LoginBoxPage extends Component {
    render() {
        return (
            <div className="login_box_page">
                <Login></Login>
            </div>
        )
    }
}
