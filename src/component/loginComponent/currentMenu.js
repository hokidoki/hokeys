import React, { Component } from 'react'
import {Menu , Form,Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as authActions from '../../reducer/auth/actions'
import {bindActionCreators} from'redux'

class CurrentMenu extends Component {
    render() {
        return (
    
            <Menu.Item id="currentBox"className="loginbox">
                <Form.Input>
                    <div>{this.props.user.displayName}<br/>
                        <div className="buttons">
                            <Icon  name="sign-out" link onClick={this.props.signOut.signOut}  className="buttons"/>
                            <Icon  name="mail" link />
                            <Icon  name="bell" link />
                        </div>
                    </div>
                </Form.Input>
            </Menu.Item>
       
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : bindActionCreators(authActions,dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMenu)
