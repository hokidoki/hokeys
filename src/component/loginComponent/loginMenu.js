import React, { Component } from 'react'
import {Menu, Icon, Form} from 'semantic-ui-react' 
import { connect } from 'react-redux'
import {login_modal_open} from '../../reducer/loginBoxReducer'


class LoginMenu extends Component {
    render() {
        console.log(this.props)
        return (
            <Menu.Item className="loginbox">
                <Form.Input>
                     <Icon  id="left" name='sign-in' className="left" link onClick={this.props.openModal} /> / <Icon id="right" name =
                     "signup" className="login_icon right"/>
                </Form.Input>
            </Menu.Item>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(login_modal_open())
    }
}

export default connect(null, mapDispatchToProps)(LoginMenu)